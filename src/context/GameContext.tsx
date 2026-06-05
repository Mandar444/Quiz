import React, { createContext, useContext, useState } from 'react';
import type { QuizQuestion } from '../types';
import { FRAMES, FRAME_QUESTIONS } from '../data/frames';
import sounds from '../utils/audio';
import { supabase } from '../lib/supabase';
import type { LanguageCode } from '../utils/translations';
import { translateQuestion } from '../utils/translations';

type ViewState = 'gallery' | 'details' | 'quiz' | 'results' | 'admin';

interface GameContextType {
  view: ViewState;
  setView: (view: ViewState) => void;
  activeFrameId: string | null;
  activeQuestionIndex: number;
  score: number;
  selectedOption: string | null;
  isAnswered: boolean;
  isCorrect: boolean;
  incorrectSelections: string[];
  quizQuestions: QuizQuestion[];
  isMixedQuiz: boolean;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  selectFrame: (frameId: string) => void;
  startQuiz: () => void;
  startMixedQuiz: () => void;
  submitAnswer: (option: string) => void;
  nextQuestion: () => void;
  exitToGallery: () => void;
  retryAnswer: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<ViewState>('gallery');
  const [activeFrameId, setActiveFrameId] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // Active question state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [incorrectSelections, setIncorrectSelections] = useState<string[]>([]);
  const [isMixedQuiz, setIsMixedQuiz] = useState<boolean>(false);
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const stored = localStorage.getItem('unscene_quiz_lang');
    return (stored === 'hi' || stored === 'mr') ? stored : 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    localStorage.setItem('unscene_quiz_lang', lang);
    setLanguageState(lang);
  };

  const selectFrame = (frameId: string) => {
    setActiveFrameId(frameId);
    setIsMixedQuiz(false);
    setView('details');
  };

  const startQuiz = () => {
    if (!activeFrameId) return;

    const frame = FRAMES.find(f => f.id === activeFrameId);
    if (!frame) return;

    const questionsPool = FRAME_QUESTIONS[activeFrameId] || [];
    if (questionsPool.length === 0) {
      console.warn(`No predefined questions found for frame: ${activeFrameId}`);
      return;
    }

    const shuffledQuestions = shuffleArray(questionsPool);
    const selectedQuestions = shuffledQuestions.slice(0, 5);

    setQuizQuestions(selectedQuestions);
    setActiveQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setIncorrectSelections([]);
    setIsMixedQuiz(false);
    setView('quiz');
  };

  const startMixedQuiz = () => {
    const allQuestions = Object.values(FRAME_QUESTIONS).flat();
    if (allQuestions.length === 0) {
      console.warn('No predefined questions found in database.');
      return;
    }

    const shuffledQuestions = shuffleArray(allQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, 10);

    setQuizQuestions(selectedQuestions);
    setActiveFrameId(null);
    setActiveQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setIncorrectSelections([]);
    setIsMixedQuiz(true);
    setView('quiz');
  };

  const submitAnswer = (option: string) => {
    if (isAnswered) return;

    const question = quizQuestions[activeQuestionIndex];
    if (!question) return;

    const translatedQuestion = translateQuestion(question, language);
    const correct = option.trim().toLowerCase() === translatedQuestion.correctAnswer.toLowerCase();

    setSelectedOption(correct ? translatedQuestion.correctAnswer : option);
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      sounds.playSuccess();
      // Only award score if they got it right on the first try
      if (incorrectSelections.length === 0) {
        setScore(prev => prev + 1);
      }
    } else {
      sounds.playFailure();
      setIncorrectSelections(prev => [...prev, option]);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setIncorrectSelections([]);

    if (activeQuestionIndex < quizQuestions.length - 1) {
      setActiveQuestionIndex(prev => prev + 1);
    } else {
      // Record the attempt in localStorage
      const userName = localStorage.getItem('unscene_user_name') || 'Anonymous';
      const questionFrame = FRAMES.find(f => f.id === activeFrameId);

      const attemptsKey = 'unscene_quiz_attempts';
      const rawAttempts = localStorage.getItem(attemptsKey);
      const attempts = rawAttempts ? JSON.parse(rawAttempts) : [];

      // Calculate attempt number for this specific person (case-insensitive)
      const userAttemptsCount = attempts.filter(
        (a: any) => a.name.toLowerCase() === userName.toLowerCase()
      ).length;

      const langLabel = language === 'hi' ? 'हिन्दी' : language === 'mr' ? 'मराठी' : 'English';
      const quizTypeWithLang = isMixedQuiz 
        ? `General Mixed Quiz (${langLabel})` 
        : `Practice: ${questionFrame?.name || 'Frame'} (${langLabel})`;

      const newAttempt = {
        id: Math.random().toString(36).substring(2, 9),
        name: userName,
        quizType: quizTypeWithLang,
        score: score,
        totalQuestions: quizQuestions.length,
        accuracy: Math.round((score / quizQuestions.length) * 100),
        attemptNumber: userAttemptsCount + 1,
        timestamp: new Date().toLocaleString()
      };

      localStorage.setItem(attemptsKey, JSON.stringify([newAttempt, ...attempts]));

      // Save to Supabase if client is initialized
      if (supabase) {
        supabase.from('unscene_quiz_attempts').insert({
          id: newAttempt.id,
          name: newAttempt.name,
          quiz_type: newAttempt.quizType,
          score: newAttempt.score,
          total_questions: newAttempt.totalQuestions,
          accuracy: newAttempt.accuracy,
          attempt_number: newAttempt.attemptNumber,
          timestamp: newAttempt.timestamp
        }).then(({ error }) => {
          if (error) {
            console.error('Error saving attempt to Supabase:', error);
          }
        });
      }

      setView('results');
    }
  };

  const exitToGallery = () => {
    setActiveFrameId(null);
    setQuizQuestions([]);
    setView('gallery');
    setIsMixedQuiz(false);
  };

  const retryAnswer = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <GameContext.Provider value={{
      view,
      setView,
      activeFrameId,
      activeQuestionIndex,
      score,
      selectedOption,
      isAnswered,
      isCorrect,
      incorrectSelections,
      quizQuestions,
      isMixedQuiz,
      language,
      setLanguage,
      selectFrame,
      startQuiz,
      startMixedQuiz,
      submitAnswer,
      nextQuestion,
      exitToGallery,
      retryAnswer
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
