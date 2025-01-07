import { useEffect, useRef } from 'react';

import styled from 'styled-components';

const StarryCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    const resizeCanvas = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const documentWidth = document.documentElement.scrollWidth;

      canvas.width = documentWidth;
      canvas.height = documentHeight;
    };

    resizeCanvas();

    type StarData = {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      alphaChange: number;
    };

    const numStars = 2000;
    const stars: StarData[] = [];

    const createStar = (): StarData => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.1,
        alpha: Math.random(),
        alphaChange: Math.random() * 0.008 + 0.0001,
      };
    };

    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    const drawStars = () => {
      stars.forEach(star => {
        star.alpha += star.alphaChange;

        if (star.alpha >= 1 || star.alpha <= 0) {
          star.alphaChange = -star.alphaChange;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars();
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', resizeCanvas);
    };
  }, []);

  return <Canvas ref={canvasRef} className="starry-canvas"></Canvas>;
};

export default StarryCanvas;

const Canvas = styled.canvas`
  position: absolute;
  pointer-events: none;
`;
