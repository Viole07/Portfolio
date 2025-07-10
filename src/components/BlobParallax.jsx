import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function BlobParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforms for 3 blobs
  const blob1X = useTransform(mouseX, [0, 1], ['-10%', '0%']);
  const blob1Y = useTransform(mouseY, [0, 1], ['5%', '15%']);

  const blob2X = useTransform(mouseX, [0, 1], ['60%', '65%']);
  const blob2Y = useTransform(mouseY, [0, 1], ['80%', '75%']);

  const blob3X = useTransform(mouseX, [0, 1], ['30%', '35%']);
  const blob3Y = useTransform(mouseY, [0, 1], ['35%', '30%']);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[20rem] h-[20rem] bg-indigo-500/40 rounded-full blur-2xl"
        style={{ top: blob1Y, left: blob1X }}
      />
      <motion.div
        className="absolute w-[18rem] h-[18rem] bg-pink-500/30 rounded-full blur-2xl"
        style={{ top: blob2Y, left: blob2X }}
      />
      <motion.div
        className="absolute w-[14rem] h-[14rem] bg-purple-500/40 rounded-full blur-2xl"
        style={{ top: blob3Y, left: blob3X }}
      />
    </div>
  );
}
