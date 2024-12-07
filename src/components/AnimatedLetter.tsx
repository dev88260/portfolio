import React from 'react';

interface AnimatedLetterProps {
  letter: string;
  index: number;
}

export default function AnimatedLetter({ letter, index }: AnimatedLetterProps) {
  return (
    <span
      className="inline-block hover:animate-bounce cursor-default"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: `letter-fade-in 0.5s ease forwards ${index * 0.1}s`
      }}
    >
      {letter}
    </span>
  );
}