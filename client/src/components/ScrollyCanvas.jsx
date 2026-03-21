import React, { useEffect, useRef, useState } from 'react';
import { useScrollFrame } from '../hooks/useScrollFrame';

export default function ScrollyCanvas({ totalFrames = 120 }) {
  const canvasRef = useRef(null);
  const currentFrameIndex = useScrollFrame(totalFrames);
  const [images, setImages] = useState([]);

  // Preload frames
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      // Added ?v=2 to bypass browser cache for the newly replaced sequence
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp?v=2`;
      img.onload = () => {
        loadedCount++;
        // Trigger a re-render when the first image loads so canvas isn't blank
        if (loadedCount === 1 || i === currentFrameIndex) {
          setImages(prev => [...prev]);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, currentFrameIndex]);

  // Draw frame on canvas when index or window size changes
  useEffect(() => {
    if (images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    const image = images[currentFrameIndex];
    
    if (!image || !image.complete) return;

    let animationFrameId;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Object-fit: cover logic
      const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
      const x = (canvas.width / 2) - (image.width / 2) * scale;
      const y = (canvas.height / 2) - (image.height / 2) * scale;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, x, y, image.width * scale, image.height * scale);
    };

    animationFrameId = requestAnimationFrame(render);
    
    const handleResize = () => {
      requestAnimationFrame(render);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentFrameIndex, images]);

  return (
    <div className="h-[500vh] w-full relative bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-black/40" /> {/* Subtle overlay for text readability */}
      </div>
    </div>
  );
}
