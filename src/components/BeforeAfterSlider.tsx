'use client';

import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'قبل',
  afterLabel = 'بعد السحر',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleDrag(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDrag(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-video border border-white/5 shadow-2xl cursor-ew-resize select-none"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onClick={(e) => handleDrag(e.clientX)}
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale"
      />

      {/* After Image (Foreground, Clipped) */}
      {/* Note: In RTL context, left and right might be visually inverted. If needed, the clip-path coordinates map to standard LTR visually from the left edge (0%). */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-125"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
      />

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-primary pointer-events-none z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-container text-white flex items-center justify-center shadow-lg border-2 border-primary pointer-events-auto transition-transform hover:scale-110">
          <span
            className="material-symbols-outlined text-sm"
            data-icon="unfold_more"
            style={{ transform: 'rotate(90deg)' }}
          >
            unfold_more
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 px-2 sm:px-4 py-1 sm:py-2 bg-black/60 backdrop-blur text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10 pointer-events-none z-20">
        {beforeLabel}
      </div>
      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 px-2 sm:px-4 py-1 sm:py-2 bg-primary-container/80 backdrop-blur text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-primary/30 pointer-events-none z-20">
        {afterLabel}
      </div>
    </div>
  );
}
