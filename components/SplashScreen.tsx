"use client"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';

interface SplashScreenProps {
  finishloading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishloading }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    anime({
      targets: '#splash-screen',
      opacity: [1, 0],
      duration: 2000,
      easing: 'easeInOutQuad',
      complete: () => finishloading(),
    });
  }, [finishloading]);

  if (!isVisible) return null;

  return (
    <div
      id="splash-screen"
      className="min-h-screen flex items-center justify-center bg-slate-900 z-50"
    >
      <Image
        src="/dp.png"
        alt="dp"
        width={50}
        height={50}
        className="animate-bounce rounded-full"
      />
    </div>
  );
};

export default SplashScreen;
