import React, { useEffect, useState } from 'react';

const phrases = [
    'I build full-stack projects',
  'I design modern apps',
  'I build interactive UI',
  'I build responsive interfaces',
];

export default function TextCycler() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const animationClasses = isAnimating
    ? 'blur-[2px] opacity-0 translate-x-2'
    : 'opacity-100 translate-x-0';

  return (
    <div className="relative w-fit mx-auto h-10 md:h-12 overflow-hidden">
      <div
        className={`text-base md:text-2xl font-medium text-indigo-300 transition-all duration-500 ease-in-out will-change-[opacity,transform,filter] ${animationClasses} hover:text-indigo-200 hover:drop-shadow-[0_0_4px_rgba(99,102,241,0.6)]`}
      >
        {phrases[index]}
      </div>
    </div>
  );
}
