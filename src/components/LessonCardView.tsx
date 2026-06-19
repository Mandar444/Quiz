import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FRAMES } from '../data/frames';
import { FrameSilhouette } from './FrameSilhouette';
import { ChevronLeft, ExternalLink, ArrowRight, Glasses } from 'lucide-react';

export const LessonCardView: React.FC = () => {
  const {
    activeFrameId,
    startQuiz,
    exitToGallery
  } = useGame();

  // Find the active frame
  const frame = FRAMES.find(f => f.id === activeFrameId);

  // If no frame active, render nothing or basic error
  if (!frame) {
    return (
      <div className="max-w-md mx-auto p-8 text-center text-zinc-500 bg-zinc-950 border border-zinc-900 rounded-2xl">
        No frame selected.
        <button 
          onClick={exitToGallery}
          className="mt-4 w-full bg-zinc-900 border border-zinc-800 text-white font-bold py-2 rounded-xl"
        >
          Return to Gallery
        </button>
      </div>
    );
  }

  // State to track selected color swatch
  const [selectedColor, setSelectedColor] = useState(frame.colors[0]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Back Button */}
      <button 
        onClick={exitToGallery}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-semibold text-sm transition-colors mb-6 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Frames
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl animate-fadeIn">
        
        {/* LEFT COLUMN: Visual Showcase (6 cols) */}
        <div className="md:col-span-6 bg-zinc-50/50 p-8 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-zinc-200 min-h-[340px]">
          
          <div className="w-full flex-1 flex flex-col justify-center items-center">
            {/* Visual Vector Silhouette */}
            <div className="w-full max-w-[380px] bg-white rounded-2xl border border-zinc-150 shadow-md p-4">
              <FrameSilhouette 
                shape={frame.shape} 
                colorName={selectedColor.name} 
                viewMode="full"
                isSun={frame.type === 'Sun' || frame.type === 'Both'}
                frameId={frame.id}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Swatch Controls */}
          <div className="w-full text-center space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
              Select Colorway
            </span>
            <div className="flex justify-center gap-3">
              {frame.colors.map((color) => {
                const isSelected = selectedColor.name === color.name;
                
                return (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-yellow-500 scale-110 shadow-lg' 
                        : 'border-zinc-200 hover:border-zinc-400 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.isTortoise ? '#5c3a21' : color.value }}
                    title={color.name}
                  >
                    {/* Tiny textures hint on Havana */}
                    {color.isTortoise && (
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(#f59e0b_20%,transparent_60%)] opacity-40" />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-zinc-700 font-bold">
              {selectedColor.name}
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Details & Actions (6 cols) */}
        <div className="md:col-span-6 p-8 flex flex-col justify-between">
          
          {/* Top Metadata */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-650">
                {frame.shape}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-650">
                {frame.material} Material
              </span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-650">
                Available as: {frame.type}
              </span>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">{frame.name}</h2>
              <p className="text-zinc-600 text-sm mt-3 leading-relaxed italic border-l-2 border-yellow-500/40 pl-3">
                "{frame.character}"
              </p>
            </div>

            {/* Technical Specifications block */}
            <div className="grid grid-cols-2 gap-4 bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 text-xs">
              <div>
                <span className="text-zinc-400 font-bold block uppercase tracking-wider text-[9px] mb-0.5">Best Face Shapes</span>
                <span className="text-zinc-800 font-semibold">{frame.bestFor.join(', ')}</span>
              </div>
              <div>
                <span className="text-zinc-400 font-bold block uppercase tracking-wider text-[9px] mb-0.5">Shop Link (UTM)</span>
                <a 
                  href={frame.shopUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-yellow-600 hover:text-yellow-500 font-bold flex items-center gap-1 group/link"
                >
                  unscenenow.com
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-y-[-0.5px] group-hover/link:translate-x-[0.5px] transition-transform" />
                </a>
              </div>
              <div className="col-span-2 border-t border-zinc-200 pt-2 mt-1">
                <span className="text-zinc-400 font-bold block uppercase tracking-wider text-[9px] mb-1">Colorways</span>
                <span className="text-zinc-600 font-medium">
                  {frame.colors.map(c => c.name).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={startQuiz}
              className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 transition-all duration-300"
            >
              Start Frame Quiz
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
            <a
              href={frame.shopUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Glasses className="w-4 h-4" />
              See on Shop
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
export default LessonCardView;
