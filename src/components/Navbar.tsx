import React from 'react';
import { useGame } from '../context/GameContext';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { view, setView, exitToGallery, startMixedQuiz } = useGame();

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Click to go back to gallery */}
        <div className="flex flex-col cursor-pointer select-none" onClick={exitToGallery}>
          <span className="font-extrabold tracking-widest text-xl text-zinc-900">UNSCENE</span>
          <span className="text-[10px] tracking-[0.25em] text-zinc-500 font-bold leading-none">ACADEMY</span>
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView(view === 'admin' ? 'gallery' : 'admin')}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all border ${
              view === 'admin'
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                : 'text-zinc-650 hover:text-zinc-900 border-zinc-200 hover:border-zinc-300 bg-white shadow-sm'
            }`}
          >
            Admin Panel
          </button>

          {view === 'gallery' ? (
            <button
              onClick={startMixedQuiz}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs md:text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-yellow-500/5 transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black/20" />
              General mixed quiz
            </button>
          ) : (
            view !== 'admin' && (
              <button
                onClick={exitToGallery}
                className="text-xs text-zinc-650 hover:text-zinc-950 font-bold border border-zinc-200 hover:border-zinc-300 px-4 py-2.5 rounded-xl transition-all bg-white shadow-sm"
              >
                Back to Frames
              </button>
            )
          )}
        </div>

      </div>
    </nav>
  );
};
export default Navbar;
