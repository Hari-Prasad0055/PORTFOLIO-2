import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress in a specific container
 * and map it to a specific frame index.
 * @param {number} totalFrames - The total number of frames in the sequence.
 */
export function useScrollFrame(totalFrames) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calculate scroll progress (0 to 1) based on document height
          const html = document.documentElement;
          // The scrollable range
          const maxScrollTop = html.scrollHeight - window.innerHeight;
          let scrollFraction = html.scrollTop / maxScrollTop;
          
          if (scrollFraction < 0) scrollFraction = 0;
          if (scrollFraction > 1) scrollFraction = 1;

          // Convert progress to frame index
          const nextFrame = Math.min(
            totalFrames - 1,
            Math.floor(scrollFraction * totalFrames)
          );

          setFrameIndex(nextFrame);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalFrames]);

  return frameIndex;
}
