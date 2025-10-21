"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      // Calculate progress based on scroll position
      const scrollProgress = Math.min((scrollPosition / maxScroll) * 100, 100);
      const roundedProgress = Math.round(scrollProgress);
      setProgress(roundedProgress);

      // Complete when reaching 100%
      if (roundedProgress >= 100) {
        console.log("Progress reached 100%, completing...");
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center space-y-8 splash-fade-in">
        {/* Main Title */}
        <div className="space-y-4 splash-scale-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            <span className="text-black transition-all duration-700 ease-out">We </span>
            <span className="text-black transition-all duration-700 ease-out animate-pulse">Connect</span>
            <span className="text-black transition-all duration-700 ease-out"> People</span>
          </h1>
        </div>

        {/* Progress Section */}
        <div className="space-y-6 splash-scale-in" style={{ animationDelay: "0.3s" }}>
          {/* Progress Number */}
          <div className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-800 transition-all duration-300 ease-out" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
            {progress}%
          </div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 h-3 bg-gray-200 rounded-full overflow-hidden mx-auto progress-glow">
            <div className="h-full bg-gradient-to-r from-black to-black rounded-full transition-all duration-300 ease-out shadow-lg" style={{ width: `${progress}%` }} />
          </div>

          {/* Scroll Indicator */}
          <div className="text-sm text-gray-500 font-medium animate-bounce">Scroll to continue...</div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-6 splash-scale-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-black rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gray-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-black rounded-full opacity-25 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
    </div>
  );
}
