'use client';

import React, { useRef } from 'react';

/**
 * BgDotPattern: Adds a mouse-following highlight effect to the dot background.
 * Usage: Wrap your main content in <BgDotPattern>...</BgDotPattern>
 */
export const BgDotPattern: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const patternRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax/highlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = patternRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Update CSS variables for highlight position
    el.style.setProperty('--dot-highlight-x', `${x}px`);
    el.style.setProperty('--dot-highlight-y', `${y}px`);
  };

  return (
    <div
      ref={patternRef}
      className="relative bg-dot-pattern overflow-hidden"
      style={{
        '--dot-highlight-x': '50%',
        '--dot-highlight-y': '50%',
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {/* Highlight overlay */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        style={{
          background:
            'radial-gradient(300px circle at var(--dot-highlight-x, 50%) var(--dot-highlight-y, 50%), rgba(255,255,255,0.25) 0%, transparent 80%)',
          transition: 'background 0.2s',
          zIndex: 1,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
