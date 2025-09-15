import { useState, useEffect } from "react";

// Custom hook for scroll animations
export const useScrollAnimation = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            const id = entry.target.dataset.id;
            const identifier = id || index;

            if (identifier && !visibleItems.includes(identifier)) {
              setVisibleItems((prev) => [...prev, identifier]);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "-10% 0px -10% 0px", // Trigger when element reaches the middle of the viewport
      }
    );

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [visibleItems]);

  return visibleItems;
};

// Animation classes for different directions with smoother animations
export const getAnimationClasses = (
  direction = "up",
  isVisible = false,
  delay = 0
) => {
  const baseClasses = "transition-all duration-1000 ease-out transform";

  if (!isVisible) {
    const hiddenClasses = {
      up: "translate-y-20 opacity-0",
      down: "-translate-y-20 opacity-0",
      left: "-translate-x-20 opacity-0",
      right: "translate-x-20 opacity-0",
      "scale-up": "scale-90 opacity-0",
      "scale-down": "scale-110 opacity-0",
    };
    return `${baseClasses} ${hiddenClasses[direction]}`;
  }

  return `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`;
};

// Generate inline styles for delays
export const getAnimationStyle = (delay = 0) => ({
  transitionDelay: `${delay}ms`,
});
