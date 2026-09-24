import React, { useState, useEffect } from 'react';

const lines = [
  "AI in my brain, code in my veins🤖",
  "Others scroll, I create🚀",
  "Full Stack Mern dev💻",
];

export default function TypewriterOnce() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentLineText = lines[lineIndex];
    const characters = Array.from(currentLineText);

    let timer;

    if (!isDeleting) {
      if (charIndex < characters.length) {
        // Typing out character by character (~80ms)
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        // Full line typed
        if (lineIndex === lines.length - 1) {
          // Last line: DO NOT erase, DO NOT loop. Stop here permanently.
          setIsFinished(true);
        } else {
          // Hold for 1.8 seconds before erasing
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
        }
      }
    } else {
      if (charIndex > 0) {
        // Erasing character by character (~38ms)
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 38);
      } else {
        // Finished erasing -> Move to next line in array
        setIsDeleting(false);
        setLineIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex, isFinished]);

  const currentCharacters = Array.from(lines[lineIndex]);
  const displayedText = currentCharacters.slice(0, charIndex).join('');

  return (
    <div className="my-4 min-h-[36px] sm:min-h-[44px] flex items-center">
      <div className="text-lg sm:text-xl font-medium text-emerald-400 font-mono tracking-tight">
        <span>{displayedText}</span>
        <span className="text-emerald-400 animate-blink inline-block ml-1 font-normal">|</span>
      </div>
    </div>
  );
}
