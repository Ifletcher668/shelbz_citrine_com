import { useCallback, useEffect, useRef } from 'react';

import styled from 'styled-components';

const StarryCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bufferCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<StarData[]>([]);
  const lastResizeTimeRef = useRef<number>(0);
  const contextRef = useRef<{
    ctx: CanvasRenderingContext2D | null;
    bufferCtx: CanvasRenderingContext2D | null;
  }>({ ctx: null, bufferCtx: null });

  // Calculate star density based on screen width
  const getStarDensity = useCallback((width: number) => {
    if (width < 768) {
      return 600;
    }
    return 1000;
  }, []);

  type StarData = {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    alphaChange: number;
  };

  const createStar = useCallback((width: number, height: number): StarData => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.1,
      alpha: Math.random(),
      alphaChange: Math.random() * 0.008 + 0.0001,
    };
  }, []);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const bufferCanvas = document.createElement('canvas');
    bufferCanvasRef.current = bufferCanvas;

    if (!canvas) return;

    // Get viewport dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Set initial canvas size
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Set buffer canvas size
    bufferCanvas.width = canvas.width;
    bufferCanvas.height = canvas.height;

    // Get contexts
    const ctx = canvas.getContext('2d', { alpha: false });
    const bufferCtx = bufferCanvas.getContext('2d', { alpha: false });

    if (ctx && bufferCtx) {
      contextRef.current = { ctx, bufferCtx };

      // Scale contexts for DPI
      ctx.scale(dpr, dpr);
      bufferCtx.scale(dpr, dpr);

      // Set initial black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      bufferCtx.fillStyle = '#000000';
      bufferCtx.fillRect(0, 0, width, height);

      // Generate initial stars with density based on screen width
      const starDensity = getStarDensity(width);
      const numStars = Math.floor((width * height) / starDensity);
      starsRef.current = Array.from({ length: numStars }, () =>
        createStar(width, height),
      );
    }
  }, [createStar, getStarDensity]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const bufferCanvas = bufferCanvasRef.current;
    if (!canvas || !bufferCanvas) return;

    const now = Date.now();
    if (now - lastResizeTimeRef.current < 100) return;
    lastResizeTimeRef.current = now;

    // Get viewport dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Update canvas sizes
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    bufferCanvas.width = canvas.width;
    bufferCanvas.height = canvas.height;

    // Reset contexts and scale
    const ctx = canvas.getContext('2d', { alpha: false });
    const bufferCtx = bufferCanvas.getContext('2d', { alpha: false });

    if (ctx && bufferCtx) {
      contextRef.current = { ctx, bufferCtx };

      // Scale for DPI
      ctx.scale(dpr, dpr);
      bufferCtx.scale(dpr, dpr);

      // Update stars for new dimensions with density based on screen width
      const starDensity = getStarDensity(width);
      const numStars = Math.floor((width * height) / starDensity);
      starsRef.current = Array.from({ length: numStars }, () =>
        createStar(width, height),
      );
    }
  }, [createStar, getStarDensity]);

  useEffect(() => {
    // Initial setup
    setupCanvas();

    const { ctx, bufferCtx } = contextRef.current;
    if (!ctx || !bufferCtx || !canvasRef.current || !bufferCanvasRef.current)
      return;

    const drawStars = () => {
      const canvas = canvasRef.current;
      const bufferCanvas = bufferCanvasRef.current;
      if (!canvas || !bufferCanvas || !ctx || !bufferCtx) return;

      // Clear with black background
      bufferCtx.fillStyle = '#000000';
      bufferCtx.fillRect(
        0,
        0,
        canvas.width / window.devicePixelRatio,
        canvas.height / window.devicePixelRatio,
      );

      // Draw stars
      starsRef.current.forEach(star => {
        star.alpha += star.alphaChange;

        if (star.alpha >= 1 || star.alpha <= 0) {
          star.alphaChange = -star.alphaChange;
        }

        bufferCtx.beginPath();
        bufferCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        bufferCtx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        bufferCtx.fill();
      });

      // Copy buffer to main canvas
      ctx.drawImage(bufferCanvas, 0, 0);
    };

    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      if (timestamp - lastFrameTime >= frameInterval) {
        drawStars();
        lastFrameTime = timestamp;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas, setupCanvas]);

  return <Canvas ref={canvasRef} />;
};

const Canvas = styled.canvas`
  position: absolute;
  pointer-events: none;
`;

export default StarryCanvas;
