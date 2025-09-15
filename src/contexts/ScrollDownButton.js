import React from "react";

const ScrollDownButton = ({ targetId, className = "" }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // If no specific target, scroll to next section (viewport height)
      window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={`group absolute bottom-8 left-1/2 transform -translate-x-1/2 
                 bg-transparent border-2 border-white/30 hover:border-white/70 
                 backdrop-blur-sm hover:bg-white/15 
                 w-14 h-14 rounded-full 
                 flex items-center justify-center 
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-xl
                 animate-pulse hover:animate-none
                 z-20 ${className}`}
      aria-label="Scroll to next section"
    >
      <svg
        className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
};

export default ScrollDownButton;
