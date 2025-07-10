import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        background: {
          color: {
            value: '#101421', // slightly lighter than before (#0c0f18)
          },
        },
        particles: {
          number: {
            value: 130,
            density: { enable: true, area: 900 },
          },
          color: { value: '#3b82f6' },
          shape: {
            type: ['circle', 'edge'],
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1.2, max: 3.5 }, // increased slightly
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.4,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: '#3b82f6',
            opacity: 0.1,
            width: 1,
          },
          move: {
  enable: true,
  speed: 0.4,
  direction: 'none',
  random: true,
  straight: false,
  outModes: { default: 'out' },
}
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.3,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
        style: {
  filter: 'blur(1px)',
}

      }}
    />
  );
}
