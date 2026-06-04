import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FRAMES } from '../data/frames';
import FrameSilhouette from './FrameSilhouette';
import { Glasses, Search } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { selectFrame, startMixedQuiz } = useGame();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Optical' | 'Sun'>('All');

  // Filter frames
  const filteredFrames = FRAMES.filter(frame => {
    const matchesSearch = frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          frame.shape.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          frame.material.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'All' || 
                        frame.type === filterType || 
                        frame.type === 'Both';
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      
      {/* Intro Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">Unscene Eyewear Collection</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
          Master recognition of Unscene's 21 custom frame models. Select any frame below to study its character, materials, and shapes, or start a mixed quiz to challenge yourself.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/70 border border-zinc-200 p-4 rounded-2xl shadow-sm">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search frame name, shape..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-200 w-full sm:w-auto justify-center">
          {(['All', 'Optical', 'Sun'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === type 
                  ? 'bg-white text-zinc-900 shadow' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              {type === 'All' ? 'All Frames' : type}
            </button>
          ))}
        </div>
      </div>

      {/* FRAMES GRID */}
      {filteredFrames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFrames.map((frame) => {
            return (
              <div 
                key={frame.id}
                onClick={() => selectFrame(frame.id)}
                className="group bg-white border border-zinc-200/80 hover:border-zinc-300 p-5 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-zinc-200/50 relative overflow-hidden"
              >
                {/* SVG Showcase */}
                <div className="w-full h-28 flex items-center justify-center py-2 select-none">
                  <FrameSilhouette 
                    shape={frame.shape} 
                    colorName={frame.colors[0].name}
                    viewMode="full"
                    isSun={frame.type === 'Sun' || frame.type === 'Both'}
                    className="w-full h-full max-w-[200px] opacity-90 group-hover:scale-105 transition-transform duration-350"
                    frameId={frame.id}
                  />
                </div>

                {/* Info */}
                <h3 className="text-base font-extrabold text-zinc-900 mt-4 group-hover:text-yellow-600 transition-colors">
                  {frame.name}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">
                  {frame.shape} • {frame.material}
                </span>

                {/* Subtitle tag */}
                <div className="absolute top-3 right-3">
                  <span className="text-[8px] tracking-wide font-extrabold px-2 py-0.5 rounded bg-zinc-55 border border-zinc-200 text-zinc-500">
                    {frame.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 text-zinc-400 font-bold border border-dashed border-zinc-200 rounded-2xl">
          No frame models matching your search.
        </div>
      )}

      {/* Global Mixed Quiz Promo banner */}
      <div className="bg-gradient-to-r from-zinc-100 to-white border border-zinc-200/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-sm">
        <div className="absolute -left-12 -top-12 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-1.5 text-center md:text-left relative z-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-yellow-600">Global Assessment</span>
          <h2 className="text-2xl font-black text-zinc-900">Ready for a mixed challenge?</h2>
          <p className="text-zinc-600 text-xs md:text-sm max-w-lg leading-relaxed">
            Test yourself with a random sample of 10 multiple-choice questions pulling from all 21 frame models, silhouettes, colors, and material specs.
          </p>
        </div>
        <button
          onClick={startMixedQuiz}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 transition-colors text-sm w-full md:w-auto"
        >
          <Glasses className="w-4 h-4" />
          Start Full Mixed Quiz
        </button>
      </div>

    </div>
  );
};
export default Dashboard;
