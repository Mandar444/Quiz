import React from 'react';
import { useGame } from '../context/GameContext';
import { FRAMES } from '../data/frames';
import FrameSilhouette from './FrameSilhouette';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { translateQuestion, translateUI, SUPPORTED_LANGUAGES } from '../utils/translations';

export const QuizView: React.FC = () => {
  const {
    view,
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
    startQuiz,
    startMixedQuiz,
    submitAnswer,
    nextQuestion,
    exitToGallery,
    retryAnswer
  } = useGame();

  const [userName, setUserName] = React.useState(localStorage.getItem('unscene_user_name') || '');
  const [hasConfirmedName, setHasConfirmedName] = React.useState(false);

  // 8-second countdown timer state
  const [timeLeft, setTimeLeft] = React.useState(8);
  const [isTimeout, setIsTimeout] = React.useState(false);

  const rawQuestion = quizQuestions[activeQuestionIndex];
  const currentQuestion = rawQuestion ? translateQuestion(rawQuestion, language) : null;

  // Timer countdown hook
  React.useEffect(() => {
    if (view !== 'quiz' || !hasConfirmedName || isAnswered) {
      return;
    }

    setTimeLeft(8);
    setIsTimeout(false);

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimeout(true);
          submitAnswer(''); // Auto-submit wrong answer on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeQuestionIndex, isAnswered, view, hasConfirmedName]);

  // Intercept view to prompt for name before quiz starts
  if (view === 'quiz' && !hasConfirmedName) {
    const questionFrame = FRAMES.find(f => f.id === (currentQuestion?.frameId || activeFrameId));
    
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl flex flex-col justify-center items-center animate-fadeIn">
          
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-600 mb-6">
            <Award className="w-12 h-12" />
          </div>

          <h2 className="text-2xl font-black text-zinc-900 text-center">
            {translateUI('quizRegistration', language)}
          </h2>
          <p className="text-zinc-500 text-xs text-center mt-2 mb-6">
            {isMixedQuiz 
              ? translateUI('enterNameMixedPrompt', language)
              : translateUI('enterNamePracticePrompt', language).replace('this frame', questionFrame?.name || 'this frame')
            }
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (userName.trim()) {
                localStorage.setItem('unscene_user_name', userName.trim());
                setHasConfirmedName(true);
              }
            }}
            className="w-full space-y-4"
          >
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                {translateUI('fullName', language)}
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. John Doe"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                {translateUI('selectLanguage', language)}
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-yellow-500 transition-colors"
              >
                {SUPPORTED_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2.5 pt-2 w-full">
              <button
                type="button"
                onClick={exitToGallery}
                className="flex-1 border border-zinc-200 hover:bg-zinc-50 text-zinc-650 font-bold py-3 rounded-xl transition-all text-xs"
              >
                {translateUI('cancel', language)}
              </button>
              <button
                type="submit"
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors text-xs"
              >
                {translateUI('startQuiz', language)}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // RENDER METHOD 1: Results View
  if (view === 'results') {
    const accuracy = quizQuestions.length > 0 
      ? Math.round((score / quizQuestions.length) * 100) 
      : 0;

    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 text-center shadow-xl flex flex-col justify-center items-center min-h-[420px] animate-fadeIn">
          
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-600 mb-6">
            <Award className="w-12 h-12" />
          </div>

          <h2 className="text-3xl font-black text-zinc-900">
            {translateUI('quizCompleted', language)}
          </h2>
          <p className="text-zinc-600 text-sm mt-3 max-w-sm leading-relaxed">
            {isMixedQuiz 
              ? translateUI('resultsMixedSubtitle', language)
              : translateUI('resultsPracticeSubtitle', language)
            }
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-8 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
            <div>
              <span className="block text-2xl font-black text-zinc-900">{score} / {quizQuestions.length}</span>
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                {translateUI('correct', language).split('!')[0]}
              </span>
            </div>
            <div>
              <span className="block text-2xl font-black text-yellow-600">{accuracy}%</span>
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                {translateUI('accuracy', language)}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="w-full max-w-xs mt-8 space-y-2.5">
            <button
              onClick={isMixedQuiz ? startMixedQuiz : startQuiz}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4 stroke-[3]" />
              {translateUI('practiceAgain', language)}
            </button>
            <button
              onClick={exitToGallery}
              className="w-full border border-zinc-250 hover:bg-zinc-50 text-zinc-700 font-bold py-3.5 rounded-xl transition-colors text-sm"
            >
              {translateUI('exitToGallery', language)}
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Fallback check if question doesn't exist
  if (!currentQuestion) {
    return (
      <div className="max-w-md mx-auto p-8 text-center text-zinc-500 bg-white border border-zinc-200 rounded-2xl shadow-sm">
        No active questions found.
        <button 
          onClick={exitToGallery}
          className="mt-4 w-full bg-zinc-50 border border-zinc-200 text-zinc-800 hover:bg-zinc-100 font-bold py-2 rounded-xl"
        >
          Return to Gallery
        </button>
      </div>
    );
  }

  const questionFrame = FRAMES.find(f => f.id === (currentQuestion.frameId || activeFrameId));

  const langLabel = language === 'hi' ? 'हिन्दी' : language === 'mr' ? 'मराठी' : 'English';

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      {/* Progress header */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center text-xs font-bold text-zinc-400">
          <span className="uppercase tracking-widest text-zinc-500">
            {isMixedQuiz 
              ? `Mixed Eyewear Quiz (${langLabel})` 
              : `Practice Quiz: ${questionFrame?.name} (${langLabel})`
            }
          </span>
          <div className="flex items-center gap-2.5">
            {!isAnswered && (
              <span className={`px-2 py-0.5 rounded font-black text-xs transition-colors duration-300 ${
                timeLeft > 5 
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-600' 
                  : timeLeft > 2 
                  ? 'bg-yellow-50 border border-yellow-200 text-yellow-600' 
                  : 'bg-red-50 border border-red-200 text-red-600 animate-pulse'
              }`}>
                ⏳ {timeLeft}s
              </span>
            )}
            <span>
              {translateUI('questionProgress', language)} {activeQuestionIndex + 1} {translateUI('of', language)} {quizQuestions.length}
            </span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2.5 bg-zinc-200/80 border border-zinc-300/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((activeQuestionIndex + (isAnswered && isCorrect ? 1 : 0)) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* QUIZ MAIN CARD */}
      <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-xl flex flex-col min-h-[520px] justify-between relative animate-fadeIn">
        
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          {/* Question text */}
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-snug mt-2 whitespace-pre-wrap">
            {currentQuestion.questionText}
          </h3>

          {/* SVG Frame Rendering */}
          {questionFrame && currentQuestion.type !== 'visual_choice' && currentQuestion.type !== 'lens_color_match' && (
            <div className="flex justify-center items-center py-6 flex-1 select-none">
              <div className="w-full max-w-2xl h-56 md:h-72 flex items-center justify-center relative">
                <FrameSilhouette 
                  shape={questionFrame.shape} 
                  colorName={
                    currentQuestion.colorName
                      ? currentQuestion.colorName 
                      : questionFrame.colors[0].name
                  }
                  viewMode={currentQuestion.silhouetteOnly ? 'silhouette' : 'full'}
                  isSun={questionFrame.type === 'Sun' || questionFrame.type === 'Both'}
                  frameId={questionFrame.id}
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Choice list depending on question type */}
          {currentQuestion.type === 'visual_choice' ? (
            <div className="grid grid-cols-2 gap-4 mt-6 flex-1 items-center justify-center py-6">
              {currentQuestion.options.map((option, idx) => {
                const optionFrame = FRAMES.find(f => f.name.toLowerCase() === option.toLowerCase());
                if (!optionFrame) return null;
                
                const isWrong = incorrectSelections.includes(option);
                const isChosen = selectedOption === option;
                const labelLetter = String.fromCharCode(65 + idx);

                return (
                  <button
                    key={option}
                    disabled={isAnswered && !isChosen}
                    onClick={() => submitAnswer(option)}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center transition-all duration-200 cursor-pointer min-h-[160px] md:min-h-[200px] relative ${
                      isChosen
                        ? isCorrect 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' 
                          : 'border-red-500 bg-red-50 text-red-700 font-bold'
                        : isWrong
                        ? 'opacity-35 border-transparent pointer-events-none'
                        : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 text-zinc-700'
                    }`}
                  >
                    <span className={`absolute top-3 left-3 w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold border ${
                      isChosen
                        ? isCorrect
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600'
                          : 'bg-red-500/20 border-red-500 text-red-600'
                        : 'bg-white border-zinc-250 text-zinc-400'
                    }`}>
                      {labelLetter}
                    </span>
                    
                    <div className="w-full h-24 md:h-32 flex items-center justify-center select-none py-2">
                      <FrameSilhouette 
                        shape={optionFrame.shape} 
                        colorName={optionFrame.colors[0].name}
                        viewMode="full"
                        isSun={optionFrame.type === 'Sun' || optionFrame.type === 'Both'}
                        frameId={optionFrame.id}
                        className="w-full h-full"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2.5 mt-6">
              {currentQuestion.options.map((option, idx) => {
                const isWrong = incorrectSelections.includes(option);
                const isChosen = selectedOption === option;
                const labelLetter = String.fromCharCode(65 + idx);

                return (
                  <button
                    key={option}
                    disabled={isAnswered && !isChosen}
                    onClick={() => submitAnswer(option)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                      isChosen
                        ? isCorrect 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold' 
                          : 'border-red-500 bg-red-50 text-red-700 font-bold'
                        : isWrong
                        ? 'opacity-35 border-transparent pointer-events-none line-through'
                        : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 text-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold border ${
                        isChosen
                          ? isCorrect
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600'
                            : 'bg-red-500/20 border-red-500 text-red-600'
                          : 'bg-white border-zinc-250 text-zinc-400'
                      }`}>
                        {labelLetter}
                      </span>
                      <span className="text-xs md:text-sm font-semibold">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Dynamic bottom banner */}
        {isAnswered && (
          <div className={`p-5 flex items-center justify-between border-t transition-all duration-300 animate-slideUp ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
              : 'bg-red-50 border-red-100 text-red-800'
          }`}>
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <CheckCircle2 className="w-7 h-7 text-emerald-500 fill-emerald-500/10 flex-shrink-0" />
              ) : (
                <XCircle className="w-7 h-7 text-red-500 fill-red-500/10 flex-shrink-0" />
              )}
              <div>
                <h4 className={`text-sm font-extrabold ${isCorrect ? 'text-emerald-950' : 'text-red-950'}`}>
                  {isCorrect 
                    ? translateUI('correct', language).split('!')[0] + '!' 
                    : isTimeout 
                    ? translateUI('timesUp', language) 
                    : translateUI('incorrect', language).split('.')[0] + '!'
                  }
                </h4>
                <p className="text-xs mt-0.5 font-semibold">
                  {isCorrect 
                    ? translateUI('correct', language)
                    : isTimeout
                    ? translateUI('timesUpSub', language)
                    : translateUI('incorrect', language)
                  }
                </p>
              </div>
            </div>

            {isCorrect || isTimeout ? (
              <button
                onClick={nextQuestion}
                className={`font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1 shadow-lg transition-colors text-sm ${
                  isCorrect 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/10' 
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/10'
                }`}
              >
                {translateUI('continue', language)}
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            ) : (
              // Incorrect: allow retry
              <button
                onClick={retryAnswer}
                className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-red-600/10 transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4 stroke-[3]" />
                {translateUI('tryAgain', language)}
              </button>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
export default QuizView;
