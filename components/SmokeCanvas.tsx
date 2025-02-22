import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const SmokeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bufferCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();
  const smokeParticlesRef = useRef<SmokeParticle[]>([]);
  const lastResizeTimeRef = useRef<number>(0);
  const contextRef = useRef<{
    ctx: CanvasRenderingContext2D | null;
    bufferCtx: CanvasRenderingContext2D | null;
  }>({ ctx: null, bufferCtx: null });

  type SmokeParticle = {
    x: number;
    y: number;
    size: number;
    alpha: number;
    velocity: { x: number; y: number };
    life: number;
    maxLife: number;
  };

  const createSmokeParticle = useCallback((width: number): SmokeParticle => {
    const size = Math.random() * 50 + 20;
    return {
      x: Math.random() * width,
      y: window.innerHeight + size,
      size,
      alpha: Math.random() * 0.4 + 0.1,
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: -Math.random() * 1 - 0.5,
      },
      life: 0,
      maxLife: Math.random() * 100 + 100,
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
    const ctx = canvas.getContext('2d');
    const bufferCtx = bufferCanvas.getContext('2d');

    if (ctx && bufferCtx) {
      contextRef.current = { ctx, bufferCtx };

      // Scale contexts for DPI
      ctx.scale(dpr, dpr);
      bufferCtx.scale(dpr, dpr);

      // Generate initial smoke particles
      const numSmoke = 50;
      smokeParticlesRef.current = Array.from({ length: numSmoke }, () =>
        createSmokeParticle(width),
      );
    }
  }, [createSmokeParticle]);

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
    const ctx = canvas.getContext('2d');
    const bufferCtx = bufferCanvas.getContext('2d');

    if (ctx && bufferCtx) {
      contextRef.current = { ctx, bufferCtx };

      // Scale for DPI
      ctx.scale(dpr, dpr);
      bufferCtx.scale(dpr, dpr);
    }
  }, []);

  useEffect(() => {
    // Initial setup
    setupCanvas();

    const { ctx, bufferCtx } = contextRef.current;
    if (!ctx || !bufferCtx || !canvasRef.current || !bufferCanvasRef.current)
      return;

    const drawSmoke = () => {
      const canvas = canvasRef.current;
      const bufferCanvas = bufferCanvasRef.current;
      if (!canvas || !bufferCanvas || !ctx || !bufferCtx) return;

      // Clear canvas (with transparency)
      bufferCtx.clearRect(
        0,
        0,
        canvas.width / window.devicePixelRatio,
        canvas.height / window.devicePixelRatio,
      );

      // Update and draw smoke particles
      smokeParticlesRef.current = smokeParticlesRef.current.filter(particle => {
        particle.life += 1;
        if (particle.life >= particle.maxLife) {
          return false;
        }

        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.velocity.x += (Math.random() - 0.5) * 0.1;

        const progress = particle.life / particle.maxLife;
        const currentAlpha = particle.alpha * (1 - progress);

        bufferCtx.beginPath();
        const gradient = bufferCtx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size,
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        bufferCtx.fillStyle = gradient;
        bufferCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        bufferCtx.fill();

        return true;
      });

      // Add new smoke particles
      while (smokeParticlesRef.current.length < 50) {
        smokeParticlesRef.current.push(
          createSmokeParticle(canvas.width / window.devicePixelRatio),
        );
      }

      // Copy buffer to main canvas
      ctx.clearRect(
        0,
        0,
        canvas.width / window.devicePixelRatio,
        canvas.height / window.devicePixelRatio,
      );
      ctx.drawImage(bufferCanvas, 0, 0);
    };

    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      if (timestamp - lastFrameTime >= frameInterval) {
        drawSmoke();
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

export default SmokeCanvas;
