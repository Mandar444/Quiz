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
    
    return { name: f.name, score };
  });

  // Sort descending by similarity score
  ranked.sort((a, b) => b.score - a.score);
  
  // Pick the top 3 closest matches
  return ranked.slice(0, 3).map(r => r.name);
};

// Generates unique distracting colors to test colorway recognition with categories
const getColorDistractors = (correctColor: string, frame: Frame, allFrames: Frame[]): string[] => {
  const distractors = new Set<string>();
  
  // 1. Add other colors of the same frame
  frame.colors.forEach(c => {
    if (c.name.toLowerCase() !== correctColor.toLowerCase()) {
      distractors.add(c.name);
    }
  });

  // 2. Add colors from other frames that share the same finish type (Metallic vs Acetate)
  const metallicTerms = ['gold', 'silver', 'gunmetal', 'rose gold', 'anthracite', 'bronze', 'matte silver', 'matte gunmetal', 'matte gold'];
  const isCorrectColorMetal = metallicTerms.some(term => correctColor.toLowerCase().includes(term));

  if (distractors.size < 3) {
    const matchingOtherColors = allFrames
      .flatMap(f => f.colors.map(c => c.name))
      .filter(name => {
        if (name.toLowerCase() === correctColor.toLowerCase()) return false;
        const isMetal = metallicTerms.some(term => name.toLowerCase().includes(term));
        return isMetal === isCorrectColorMetal;
      });

    const shuffled = [...matchingOtherColors].sort(() => 0.5 - Math.random());
    for (const name of shuffled) {
      distractors.add(name);
      if (distractors.size >= 3) break;
    }
  }

  // 3. Fallback: Add any other color if still need more
  if (distractors.size < 3) {
    const allOtherColors = allFrames
      .flatMap(f => f.colors.map(c => c.name))
      .filter(name => name.toLowerCase() !== correctColor.toLowerCase());
    
    const shuffled = [...allOtherColors].sort(() => 0.5 - Math.random());
    for (const name of shuffled) {
      distractors.add(name);
      if (distractors.size >= 3) break;
    }
  }

  return Array.from(distractors).slice(0, 3);
};

// Generates unique distracting lens colors to test lens color recognition
const getLensColorDistractors = (correctLensColor: string, allFrames: Frame[]): string[] => {
  const distractors = new Set<string>();
  
  const allLensColors = allFrames
    .flatMap(f => f.colors.map(c => c.lensColor))
    .filter((lc): lc is string => !!lc && lc.trim() !== '' && lc.toLowerCase() !== correctLensColor.toLowerCase());

  const shuffled = [...allLensColors].sort(() => 0.5 - Math.random());
  for (const lc of shuffled) {
    distractors.add(lc);
    if (distractors.size >= 3) break;
  }

  return Array.from(distractors).slice(0, 3);
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

    // Mix of 2 color recognition questions, 2 visual choice questions, and 1 lens color match question
    const questionTypes = shuffleArray([
      'colour_recognition', 'colour_recognition',
      'visual_choice', 'visual_choice',
      'lens_color_match'
    ]);

    const questions: QuizQuestion[] = Array.from({ length: 5 }).map((_, idx) => {
      const qType = questionTypes[idx];
      const color = frame.colors[idx % frame.colors.length];

      if (qType === 'visual_choice') {
        const distractorNames = getConfusingDistractors(frame, FRAMES);
        const options = shuffleArray([frame.name, ...distractorNames]);
        return {
          id: `${frame.id}_visual_choice_${idx}`,
          type: 'visual_choice',
          questionText: `Which of these frames is the ${frame.name}?`,
          options,
          correctAnswer: frame.name,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      } else if (qType === 'lens_color_match') {
        const correctLens = color.lensColor || 'Clear';
        const distractorLenses = getLensColorDistractors(correctLens, FRAMES);
        const options = shuffleArray([correctLens, ...distractorLenses]);
        return {
          id: `${frame.id}_lens_${idx}`,
          type: 'lens_color_match',
          questionText: `What lens color does the ${frame.name} in ${color.name} feature?`,
          options,
          correctAnswer: correctLens,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      } else {
        const distractorColors = getColorDistractors(color.name, frame, FRAMES);
        const options = shuffleArray([color.name, ...distractorColors]);
        return {
          id: `${frame.id}_color_${idx}`,
          type: 'colour_recognition',
          questionText: `What colorway of the ${frame.name} is shown here?`,
          options,
          correctAnswer: color.name,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      }
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

    // Shuffle 10 questions of different types: 3x name_the_frame, 2x colour_recognition, 3x visual_choice, 2x lens_color_match
    const questionTypes = shuffleArray([
      'name_the_frame', 'name_the_frame', 'name_the_frame',
      'colour_recognition', 'colour_recognition',
      'visual_choice', 'visual_choice', 'visual_choice',
      'lens_color_match', 'lens_color_match'
    ]);

    const questions: QuizQuestion[] = selectedFrames.map((frame, idx) => {
      const qType = questionTypes[idx];
      const color = frame.colors[Math.floor(Math.random() * frame.colors.length)];
      const distractorNames = getConfusingDistractors(frame, FRAMES);
      const options = shuffleArray([frame.name, ...distractorNames]);

      if (qType === 'colour_recognition') {
        const distractorColors = getColorDistractors(color.name, frame, FRAMES);
        const colorOptions = shuffleArray([color.name, ...distractorColors]);
        return {
          id: `mixed_color_${idx}_${frame.id}`,
          type: 'colour_recognition',
          questionText: `What colorway of the ${frame.name} is shown here?`,
          options: colorOptions,
          correctAnswer: color.name,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      } else if (qType === 'lens_color_match') {
        const correctLens = color.lensColor || 'Clear';
        const distractorLenses = getLensColorDistractors(correctLens, FRAMES);
        const lensOptions = shuffleArray([correctLens, ...distractorLenses]);
        return {
          id: `mixed_lens_${idx}_${frame.id}`,
          type: 'lens_color_match',
          questionText: `What lens color does the ${frame.name} in ${color.name} feature?`,
          options: lensOptions,
          correctAnswer: correctLens,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      } else {
        return {
          id: `mixed_${qType}_${idx}_${frame.id}`,
          type: qType as any,
          questionText: qType === 'visual_choice' 
            ? `Which of these frames is the ${frame.name}?` 
            : 'Identify this Unscene frame model.',
          options,
          correctAnswer: frame.name,
          frameId: frame.id,
          colorName: color.name,
          silhouetteOnly: false
        };
      }
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
