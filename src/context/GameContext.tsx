import React, { createContext, useContext, useState } from 'react';
import type { QuizQuestion, Frame } from '../types';
import { FRAMES } from '../data/frames';
import sounds from '../utils/audio';
import { supabase } from '../lib/supabase';

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

// Generates distracting choices that share similar shapes and materials to make the quiz more challenging
const getConfusingDistractors = (correctFrame: Frame, allFrames: Frame[]): string[] => {
  const otherFrames = allFrames.filter(f => f.id !== correctFrame.id);
  
  const ranked = otherFrames.map(f => {
    let score = 0;
    
    // Weight heavily if it shares the exact same shape (e.g. Round vs Round)
    if (f.shape === correctFrame.shape) {
      score += 5;
    }
    
    // Weight if it shares the exact same material (e.g. Acetate vs Acetate)
    if (f.material === correctFrame.material) {
      score += 3;
    }
    
    // Add small random noise so distractors vary slightly on different attempts
    score += Math.random() * 2;
    
    return { name: f.name, score };
  });

  // Sort descending by similarity score
  ranked.sort((a, b) => b.score - a.score);
  
  // Pick the top 3 closest matches
  return ranked.slice(0, 3).map(r => r.name);
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

  const selectFrame = (frameId: string) => {
    setActiveFrameId(frameId);
    setIsMixedQuiz(false);
    setView('details');
  };

  const startQuiz = () => {
    if (!activeFrameId) return;

    const frame = FRAMES.find(f => f.id === activeFrameId);
    if (!frame) return;

    // Generate exactly 5 product identification questions using frame colors
    const questions: QuizQuestion[] = Array.from({ length: 5 }).map((_, idx) => {
      const color = frame.colors[idx % frame.colors.length];
      const distractorNames = getConfusingDistractors(frame, FRAMES);
      const options = shuffleArray([frame.name, ...distractorNames]);

      return {
        id: `${frame.id}_ident_${idx}`,
        type: 'name_the_frame',
        questionText: 'Identify this Unscene frame model.',
        options,
        correctAnswer: frame.name,
        frameId: frame.id,
        colorName: color.name,
        silhouetteOnly: false
      };
    });

    setQuizQuestions(questions);
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
    // Pick 10 random frames for identification
    const shuffledFrames = [...FRAMES].sort(() => 0.5 - Math.random());
    const selectedFrames = shuffledFrames.slice(0, 10);

    const questions: QuizQuestion[] = selectedFrames.map((frame, idx) => {
      const color = frame.colors[Math.floor(Math.random() * frame.colors.length)];
      const distractorNames = getConfusingDistractors(frame, FRAMES);
      const options = shuffleArray([frame.name, ...distractorNames]);

      return {
        id: `mixed_ident_${idx}_${frame.id}`,
        type: 'name_the_frame',
        questionText: 'Identify this Unscene frame model.',
        options,
        correctAnswer: frame.name,
        frameId: frame.id,
        colorName: color.name,
        silhouetteOnly: false
      };
    });

    setQuizQuestions(questions);
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

    const correct = option.trim().toLowerCase() === question.correctAnswer.toLowerCase();

    setSelectedOption(correct ? question.correctAnswer : option);
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

      const newAttempt = {
        id: Math.random().toString(36).substring(2, 9),
        name: userName,
        quizType: isMixedQuiz ? 'General Mixed Quiz' : `Practice: ${questionFrame?.name || 'Frame'}`,
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
