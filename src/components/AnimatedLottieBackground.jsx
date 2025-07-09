import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import bgAnimation from '../assets/Animation - 1751995479833.json';
export default function AnimatedLottieBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Player
  autoplay
  loop
  src={bgAnimation}
  className="fixed inset-0 -z-10"
  style={{
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0f172a',
  }}
/>
    </div>
  );
}
