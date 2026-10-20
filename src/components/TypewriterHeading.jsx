import React, { useState, useEffect } from 'react';

const heroLines = [
  "Hi, I am Gaurav Saha",
  "Full Stack MERN Developer",
  "I don't follow trends, I build them⚡",
  "AI in my brain, code in my veins🤖",
  "Others scroll, I create🚀",
];

export default function TypewriterHeading() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = heroLines[lineIndex];
    const characters = Array.from(currentFullText);

    let timer;

    if (!isDeleting) {
      if (charIndex < characters.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % heroLines.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, lineIndex]);

  const currentCharacters = Array.from(heroLines[lineIndex]);
  const displayedText = currentCharacters.slice(0, charIndex).join('');

  return (
    <div className="min-h-[110px] sm:min-h-[150px] flex items-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
        <span>{displayedText}</span>
        <span className="text-emerald-400 animate-blink inline-block ml-1 font-normal">|</span>
      </h1>
    </div>
  );
}
