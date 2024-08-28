"use client"
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { TbHexagonLetterP } from "react-icons/tb";
interface SplashScreenProps{
  finishloading: () => void
}
const SplashScreen: React.FC<SplashScreenProps> = ({finishloading}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    anime({
      targets: '#splash-screen',
      opacity: [1, 0],
      duration: 2000,
      easing: 'easeInOutQuad',
      complete: () => finishloading(),
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="splash-screen"
      className="min-h-screen flex items-center justify-center bg-slate-900 z-50"
    >
      <h1 className="text-7xl text-indigo-100 animate-bounce"> <TbHexagonLetterP /> </h1>
    </div>
  );
};

export default SplashScreen;
