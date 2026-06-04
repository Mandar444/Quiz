import React from 'react';
import { useGame } from '../context/GameContext';
import { FRAMES } from '../data/frames';
import FrameSilhouette from './FrameSilhouette';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';

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
    startQuiz,
    startMixedQuiz,
    submitAnswer,
    nextQuestion,
    exitToGallery,
    retryAnswer
  } = useGame();

  const [userName, setUserName] = React.useState(localStorage.getItem('unscene_user_name') || '');
  const [hasConfirmedName, setHasConfirmedName] = React.useState(false);

  const currentQuestion = quizQuestions[activeQuestionIndex];

  // Intercept view to prompt for name before quiz starts
  if (view === 'quiz' && !hasConfirmedName) {
    const questionFrame = FRAMES.find(f => f.id === (currentQuestion?.frameId || activeFrameId));
    
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xl flex flex-col justify-center items-center animate-fadeIn">
          
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-600 mb-6">
            <Award className="w-12 h-12" />
          </div>

          <h2 className="text-2xl font-black text-zinc-900 text-center">Quiz Registration</h2>
          <p className="text-zinc-500 text-xs text-center mt-2 mb-6">
            {isMixedQuiz 
              ? 'Enter your name to begin the General Mixed Quiz.'
              : `Enter your name to begin the practice quiz for ${questionFrame?.name || 'this frame'}.`
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
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Your Full Name
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

            <div className="flex gap-2.5 pt-2 w-full">
              <button
                type="button"
                onClick={exitToGallery}
                className="flex-1 border border-zinc-200 hover:bg-zinc-50 text-zinc-650 font-bold py-3 rounded-xl transition-all text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors text-xs"
              >
                Begin Quiz
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

          <h2 className="text-3xl font-black text-zinc-900">Quiz Completed!</h2>
          <p className="text-zinc-600 text-sm mt-3 max-w-sm leading-relaxed">
            {isMixedQuiz 
              ? `You finished the General Mixed Quiz. You successfully recognized and recalled the properties of Unscene Eyewear frames.` 
              : `Nice work! You practiced identifying details for the frame model.`
            }
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-8 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
            <div>
              <span className="block text-2xl font-black text-zinc-900">{score} / {quizQuestions.length}</span>
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Correct</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-yellow-600">{accuracy}%</span>
              <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Accuracy</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="w-full max-w-xs mt-8 space-y-2.5">
            <button
              onClick={isMixedQuiz ? startMixedQuiz : startQuiz}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4 stroke-[3]" />
              Practice Again
            </button>
            <button
              onClick={exitToGallery}
              className="w-full border border-zinc-250 hover:bg-zinc-50 text-zinc-700 font-bold py-3.5 rounded-xl transition-colors text-sm"
            >
              Return to Gallery
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

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      {/* Progress header */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center text-xs font-bold text-zinc-400">
          <span className="uppercase tracking-widest text-zinc-500">
            {isMixedQuiz ? 'Mixed Eyewear Quiz' : `Practice Quiz: ${questionFrame?.name}`}
          </span>
          <span>
            Question {activeQuestionIndex + 1} of {quizQuestions.length}
          </span>
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
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-snug mt-2">
            {currentQuestion.questionText}
          </h3>

          {/* SVG Frame Rendering (if not mixup visual challenge) */}
          {questionFrame && currentQuestion.type !== 'mixup_challenge' && (
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

          {/* Visual Choices for Mixup Challenge */}
          {currentQuestion.type === 'mixup_challenge' && (
            <div className="grid grid-cols-2 gap-4 py-4 flex-1">
              {currentQuestion.options.map((optionName) => {
                const matchingFrame = FRAMES.find(f => f.name === optionName);
                if (!matchingFrame) return null;
                
                const isWrong = incorrectSelections.includes(optionName);
                const isChosen = selectedOption === optionName;

                return (
                  <div 
                    key={optionName}
                    onClick={() => submitAnswer(optionName)}
                    className={`border rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 min-h-[180px] md:min-h-[220px] select-none ${
                      isChosen
                        ? isCorrect 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md font-bold' 
                          : 'border-red-500 bg-red-50 text-red-700 shadow-md font-bold'
                        : isWrong
                        ? 'opacity-30 border-transparent bg-transparent pointer-events-none'
                        : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 hover:border-zinc-300 text-zinc-700 shadow-sm'
                    }`}
                  >
                    <FrameSilhouette 
                      shape={matchingFrame.shape} 
                      colorName={matchingFrame.colors[0].name}
                      viewMode="full"
                      isSun={matchingFrame.type === 'Sun' || matchingFrame.type === 'Both'}
                      className="w-full h-24 md:h-32"
                      frameId={matchingFrame.id}
                    />
                    <span className="text-[11px] font-extrabold mt-3 text-zinc-500">{matchingFrame.name}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Choice list for text options */}
          {currentQuestion.type !== 'mixup_challenge' && (
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

        {/* Dynamic bottom banner banner */}
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
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </h4>
                <p className="text-xs mt-0.5 font-semibold">
                  {isCorrect 
                    ? 'Well done! Click continue' 
                    : `Correct Answer: ${currentQuestion.correctAnswer}`
                  }
                </p>
              </div>
            </div>

            {isCorrect ? (
              <button
                onClick={nextQuestion}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1 shadow-lg shadow-emerald-600/10 transition-colors text-sm"
              >
                Continue
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            ) : (
              // Incorrect: allow retry
              <button
                onClick={retryAnswer}
                className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-red-600/10 transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4 stroke-[3]" />
                Try Again
              </button>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
export default QuizView;
