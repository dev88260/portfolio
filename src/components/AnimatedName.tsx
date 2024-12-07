import React from 'react';
import AnimatedLetter from './AnimatedLetter';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

export default function AnimatedName({ name, className = '' }: AnimatedNameProps) {
  return (
    <h1 className={`text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 ${className}`}>
      {name.split('').map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} index={index} />
      ))}
    </h1>
  );
}