import React from 'react';
import type { FrameShape } from '../types';
import { FRAMES } from '../data/frames';

interface FrameSilhouetteProps {
  shape: FrameShape;
  colorName: string;
  viewMode: 'full' | 'silhouette';
  isSun?: boolean; // If true, render dark sunglass lenses. Else clear optical lenses.
  className?: string;
  frameId?: string; // If supplied, renders the actual product image
}

export const FrameSilhouette: React.FC<FrameSilhouetteProps> = ({
  shape,
  colorName,
  viewMode,
  isSun = true,
  className = 'w-full h-auto',
  frameId
}) => {
  // Try loading real product photo if in full view mode
  if (viewMode === 'full') {
    const frame = frameId 
      ? FRAMES.find(f => f.id === frameId) 
      : FRAMES.find(f => f.shape === shape);
    if (frame) {
      const color = frame.colors.find(c => c.name.toLowerCase() === colorName.toLowerCase()) || frame.colors[0];
      const imgName = isSun 
        ? color.imageSun || color.imageOpt 
        : color.imageOpt || color.imageSun;
        
      if (imgName) {
        return (
          <div className={`${className} flex items-center justify-center overflow-hidden max-h-full select-none`}>
            <img 
              src={`/productimages/${imgName}`} 
              alt={`${frame.name} ${colorName}`} 
              loading="lazy"
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transform transition-transform duration-300"
              onError={(e) => {
                // If image fails, hide it and standard SVG render will proceed as fallback
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        );
      }
    }
  }

  const normColor = colorName.toLowerCase().replace(/\s+/g, '-');
  
  // Decide fill references
  let frameFill = '#111111';
  let lensFill = isSun ? 'url(#sunLensGrad)' : 'url(#optLensGrad)';
  let frameOpacity = 1;
  let strokeColor = 'none';
  let strokeWidth = 0;

  if (viewMode === 'silhouette') {
    frameFill = '#2d3748'; // Solid dark grey for silhouette mode
    lensFill = '#2d3748';
  } else {
    switch (normColor) {
      case 'black-shell':
        frameFill = 'url(#blackShellGrad)';
        break;
      case 'matte-black':
        frameFill = '#222222';
        break;
      case 'havana':
        frameFill = 'url(#havanaPat)';
        break;
      case 'champagne':
        frameFill = '#e5cca4';
        frameOpacity = 0.75; // Translucent
        strokeColor = '#cbb28a';
        strokeWidth = 0.5;
        break;
      case 'teal':
        frameFill = '#0f766e';
        frameOpacity = 0.8; // Translucent
        strokeColor = '#0d9488';
        strokeWidth = 0.5;
        break;
      case 'grey-translucent':
        frameFill = '#4b5563';
        frameOpacity = 0.65; // Translucent
        strokeColor = '#6b7280';
        strokeWidth = 0.5;
        break;
      case 'gold':
        frameFill = 'url(#goldGrad)';
        break;
      case 'silver':
        frameFill = 'url(#silverGrad)';
        break;
      case 'gunmetal':
        frameFill = 'url(#gunmetalGrad)';
        break;
      case 'rose-gold':
        frameFill = 'url(#roseGoldGrad)';
        break;
      default:
        frameFill = '#111111';
    }
  }

  // Define geometries inside the SVG
  const renderGeometry = () => {
    switch (shape) {
      case 'Round':
        return (
          <>
            {/* Lenses */}
            <circle cx="55" cy="40" r="18" fill={lensFill} />
            <circle cx="145" cy="40" r="18" fill={lensFill} />
            {/* Frame Outer Rims */}
            <path
              d="M 55 18 A 22 22 0 1 0 55 62 A 22 22 0 1 0 55 18 Z M 55 22 A 18 18 0 1 1 55 58 A 18 18 0 1 1 55 22 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M 145 18 A 22 22 0 1 0 145 62 A 22 22 0 1 0 145 18 Z M 145 22 A 18 18 0 1 1 145 58 A 18 18 0 1 1 145 22 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Bridge */}
            <path
              d="M 77 38 C 82 34, 118 34, 123 38"
              fill="none"
              stroke={frameFill}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Hinge Details (only in full mode) */}
            {viewMode === 'full' && (
              <>
                <circle cx="28" cy="40" r="1.2" fill="#fff" opacity="0.8" />
                <circle cx="172" cy="40" r="1.2" fill="#fff" opacity="0.8" />
              </>
            )}
          </>
        );

      case 'Oval':
        return (
          <>
            {/* Lenses */}
            <ellipse cx="55" cy="40" rx="20" ry="13" fill={lensFill} />
            <ellipse cx="145" cy="40" rx="20" ry="13" fill={lensFill} />
            {/* Rims */}
            <path
              d="M 55 24 C 68.3 24, 79 31.2, 79 40 C 79 48.8, 68.3 56, 55 56 C 41.7 56, 31 48.8, 31 40 C 31 31.2, 41.7 24, 55 24 Z M 55 27 C 65.5 27, 74 32.8, 74 40 C 74 47.2, 65.5 53, 55 53 C 44.5 53, 36 47.2, 36 40 C 36 32.8, 44.5 27, 55 27 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            <path
              d="M 145 24 C 158.3 24, 169 31.2, 169 40 C 169 48.8, 158.3 56, 145 56 C 131.7 56, 121 48.8, 121 40 C 121 31.2, 131.7 24, 145 24 Z M 145 27 C 155.5 27, 164 32.8, 164 40 C 164 47.2, 155.5 53, 145 53 C 134.5 53, 126 47.2, 126 40 C 126 32.8, 134.5 27, 145 27 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {/* Bridge */}
            <path
              d="M 75 39 C 81 36, 119 36, 125 39"
              fill="none"
              stroke={frameFill}
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Temples (back view hints) */}
            {viewMode === 'full' && (
              <>
                <rect x="26" y="38" width="5" height="4" rx="1" fill={frameFill} opacity="0.9" />
                <rect x="169" y="38" width="5" height="4" rx="1" fill={frameFill} opacity="0.9" />
              </>
            )}
          </>
        );

      case 'Rectangle':
        return (
          <>
            {/* Lenses */}
            <rect x="34" y="24" width="42" height="28" rx="4" fill={lensFill} />
            <rect x="124" y="24" width="42" height="28" rx="4" fill={lensFill} />
            {/* Rims */}
            <path
              d="M 30 20 Q 26 20 26 24 L 26 52 Q 26 56 30 56 L 80 56 Q 84 56 84 52 L 84 24 Q 84 20 80 20 Z M 34 24 L 80 24 L 80 52 L 34 52 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fillRule="evenodd"
            />
            <path
              d="M 120 20 Q 116 20 116 24 L 116 52 Q 116 56 120 56 L 170 56 Q 174 56 174 52 L 174 24 Q 174 20 170 20 Z M 124 24 L 170 24 L 170 52 L 124 52 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fillRule="evenodd"
            />
            {/* Bridge */}
            <rect x="84" y="34" width="32" height="4.5" rx="1" fill={frameFill} />
            {/* Rivets */}
            {viewMode === 'full' && (
              <>
                <circle cx="30" cy="25" r="1" fill="#bbb" />
                <circle cx="170" cy="25" r="1" fill="#bbb" />
              </>
            )}
          </>
        );

      case 'Wayfarer':
        return (
          <>
            {/* Lenses */}
            <path d="M 34.5 24.5 L 75.5 26.5 C 73.5 38.5, 68.5 50.5, 52.5 50.5 C 41.5 50.5, 34.5 42.5, 34.5 24.5 Z" fill={lensFill} />
            <path d="M 165.5 24.5 L 124.5 26.5 C 126.5 38.5, 131.5 50.5, 147.5 50.5 C 158.5 50.5, 165.5 42.5, 165.5 24.5 Z" fill={lensFill} />
            {/* Rims */}
            <path
              d="M 28 20 C 32 20, 78 22, 80 22 C 82 22, 84 25, 82 32 C 80 39, 74 53, 52 53 C 35 53, 29 44, 28 32 C 27 25, 25 20, 28 20 Z M 34.5 24.5 L 34.5 42.5 C 34.5 50.5, 41.5 50.5, 52.5 50.5 C 68.5 50.5, 73.5 38.5, 75.5 26.5 L 34.5 24.5 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fillRule="evenodd"
            />
            <path
              d="M 172 20 C 168 20, 122 22, 120 22 C 118 22, 116 25, 118 32 C 120 39, 126 53, 148 53 C 165 53, 171 44, 172 32 C 173 25, 175 20, 172 20 Z M 165.5 24.5 L 165.5 42.5 C 165.5 50.5, 158.5 50.5, 147.5 50.5 C 131.5 50.5, 126.5 38.5, 124.5 26.5 L 165.5 24.5 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fillRule="evenodd"
            />
            {/* Bold Bridge */}
            <path
              d="M 80 22 C 86 21, 114 21, 120 22 C 122 25, 120 30, 118 30 C 108 27, 92 27, 82 30 C 80 30, 78 25, 80 22 Z"
              fill={frameFill}
            />
            {/* Rivets */}
            {viewMode === 'full' && (
              <>
                <ellipse cx="32" cy="23" rx="1.5" ry="0.8" fill="#ddd" transform="rotate(-5, 32, 23)" />
                <ellipse cx="168" cy="23" rx="1.5" ry="0.8" fill="#ddd" transform="rotate(5, 168, 23)" />
              </>
            )}
          </>
        );

      case 'Aviator':
        return (
          <>
            {/* Lenses */}
            <path d="M 36.5 23 L 73.5 23 C 73.5 34, 70.5 54, 52.5 54 C 38.5 54, 33.5 38, 36.5 23 Z" fill={lensFill} />
            <path d="M 163.5 23 L 126.5 23 C 126.5 34, 129.5 54, 147.5 54 C 161.5 54, 166.5 38, 163.5 23 Z" fill={lensFill} />
            {/* Wire Rims */}
            <path
              d="M 35 21 L 75 21 C 77 34, 73 56, 52 56 C 36 56, 31 39, 35 21 Z M 36.5 23 C 33.5 38, 38.5 54, 52.5 54 C 70.5 54, 73.5 34, 73.5 23 L 36.5 23 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              fillRule="evenodd"
            />
            <path
              d="M 165 21 L 125 21 C 123 34, 127 56, 148 56 C 164 56, 169 39, 165 21 Z M 163.5 23 C 166.5 38, 161.5 54, 147.5 54 C 129.5 54, 126.5 34, 126.5 23 L 163.5 23 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              fillRule="evenodd"
            />
            {/* Double Bridge */}
            {/* Upper bridge */}
            <rect x="73.5" y="21" width="53" height="2" fill={frameFill} />
            {/* Lower bridge */}
            <path
              d="M 74 31 C 82 27, 118 27, 126 31"
              fill="none"
              stroke={frameFill}
              strokeWidth="2.5"
            />
          </>
        );

      case 'Hexagon':
        return (
          <>
            {/* Lenses */}
            <path d="M 44.5 23 L 65.5 23 L 75.5 38 L 65.5 53 L 44.5 53 L 34.5 38 Z" fill={lensFill} />
            <path d="M 155.5 23 L 134.5 23 L 124.5 38 L 134.5 53 L 155.5 53 L 165.5 38 Z" fill={lensFill} />
            {/* Hexagonal wire frame */}
            <path
              d="M 42 20 L 68 20 L 79 38 L 68 56 L 42 56 L 31 38 Z M 44.5 23 L 34.5 38 L 44.5 53 L 65.5 53 L 75.5 38 L 65.5 23 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              fillRule="evenodd"
            />
            <path
              d="M 158 20 L 132 20 L 121 38 L 132 56 L 158 56 L 169 38 Z M 155.5 23 L 165.5 38 L 155.5 53 L 134.5 53 L 124.5 38 L 134.5 23 Z"
              fill={frameFill}
              fillOpacity={frameOpacity}
              fillRule="evenodd"
            />
            {/* Bridge */}
            <rect x="78" y="36.5" width="44" height="3" rx="0.5" fill={frameFill} />
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 200 80" className={className}>
      <defs>
        {/* Sunglasses dark tint lens gradient */}
        <linearGradient id="sunLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a251e" />
          <stop offset="60%" stopColor="#111814" />
          <stop offset="100%" stopColor="#080c0a" />
        </linearGradient>

        {/* Optical anti-reflective clear blue lens gradient */}
        <linearGradient id="optLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ebf8fa" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#d8f3f8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c5eff7" stopOpacity="0.7" />
        </linearGradient>

        {/* Havana Tortoiseshell pattern */}
        <pattern id="havanaPat" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <rect width="20" height="20" fill="#3b1f0b" />
          <circle cx="4" cy="4" r="3" fill="#a16207" opacity="0.85" />
          <circle cx="14" cy="6" r="4.5" fill="#d97706" opacity="0.75" />
          <circle cx="8" cy="15" r="2.5" fill="#f59e0b" opacity="0.6" />
          <circle cx="16" cy="16" r="3.5" fill="#78350f" opacity="0.9" />
        </pattern>

        {/* Black Shell Gloss gradient */}
        <linearGradient id="blackShellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2c3540" />
          <stop offset="30%" stopColor="#181c22" />
          <stop offset="100%" stopColor="#0b0e11" />
        </linearGradient>

        {/* Gold plating gradient */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3c46b" />
          <stop offset="50%" stopColor="#c5a045" />
          <stop offset="100%" stopColor="#a37c24" />
        </linearGradient>

        {/* Silver plating gradient */}
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="50%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>

        {/* Gunmetal plating gradient */}
        <linearGradient id="gunmetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>

        {/* Rose gold plating gradient */}
        <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3c8bf" />
          <stop offset="50%" stopColor="#d99f94" />
          <stop offset="100%" stopColor="#b57c72" />
        </linearGradient>
      </defs>

      {/* Render temples behind lenses (only if viewMode is full) */}
      {viewMode === 'full' && (
        <>
          <path d="M 22 28 C 12 25, 4 35, 2 38" fill="none" stroke="#222" strokeWidth="2.5" opacity="0.3" />
          <path d="M 178 28 C 188 25, 196 35, 198 38" fill="none" stroke="#222" strokeWidth="2.5" opacity="0.3" />
        </>
      )}

      {/* Render frame shapes */}
      {renderGeometry()}

      {/* Gloss overlay shine line on lenses (only in full mode) */}
      {viewMode === 'full' && (
        <>
          <path d="M 38 27 L 46 25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <path d="M 128 27 L 136 25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </>
      )}
    </svg>
  );
};
export default FrameSilhouette;
