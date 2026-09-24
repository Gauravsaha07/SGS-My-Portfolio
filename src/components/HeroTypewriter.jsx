import React, { useState, useEffect } from 'react';

const rawLines = [
  "Hi, I am Gaurav Saha",
  "Full Stack MERN Developer",
  "I don't follow trends, I build them⚡",
  "Full Stack Mern dev💻",
  "AI in my brain, code in my veins🤖",
  "Others scroll, I create🚀",
];

// Pre-split lines into unicode code point arrays
const parsedLines = rawLines.map((line) => Array.from(line));
const lineLengths = parsedLines.map((chars) => chars.length);

const lineStartIndices = [];
let cumulative = 0;
for (let len of lineLengths) {
  lineStartIndices.push(cumulative);
  cumulative += len;
}
const totalLength = cumulative;

export default function HeroTypewriter() {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= totalLength) return;

    const timer = setTimeout(() => {
      setTypedCount((prev) => prev + 1);
    }, 45);

    return () => clearTimeout(timer);
  }, [typedCount]);

  // Find active line index
  let activeLineIndex = 0;
  for (let i = 0; i < parsedLines.length; i++) {
    if (typedCount >= lineStartIndices[i]) {
      activeLineIndex = i;
    }
  }

  return (
    <div className="min-h-[290px] sm:min-h-[350px] flex flex-col justify-start space-y-2 py-2">
      {parsedLines.map((chars, idx) => {
        const startIdx = lineStartIndices[idx];
        if (typedCount < startIdx) return null; // Line hasn't started typing yet

        const charsForThisLine = Math.min(chars.length, typedCount - startIdx);
        const lineText = chars.slice(0, charsForThisLine).join('');
        const isActive = idx === activeLineIndex;

        if (idx === 0) {
          // Line 0: Main heading style with "Gaurav Saha" in accent color
          const prefix = lineText.slice(0, 10);
          const namePart = lineText.length > 10 ? lineText.slice(10) : '';

          return (
            <h1 key={idx} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2">
              <span>{prefix}</span>
              {namePart && <span className="text-emerald-400">{namePart}</span>}
              {isActive && <span className="text-emerald-400 animate-blink inline-block ml-1 font-normal">|</span>}
            </h1>
          );
        }

        // Lines 1..5: Tagline style
        return (
          <p key={idx} className="text-xl sm:text-2xl font-medium text-zinc-300 leading-snug">
            <span>{lineText}</span>
            {isActive && <span className="text-emerald-400 animate-blink inline-block ml-1 font-normal">|</span>}
          </p>
        );
      })}
    </div>
  );
}
