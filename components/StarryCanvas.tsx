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
        radius: Math.random() * 2 + 1,
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

    const shootingStar = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 4,
      speed: 0.0001,
      t: 0,
      lastX: Math.random() * canvas.width,
      lastY: Math.random() * canvas.height,
    };

    const points = [
      { x: shootingStar.x, y: shootingStar.y },
      { x: 60, y: 60 },
      { x: 200, y: 200 },
      { x: 60, y: 60 },
    ];

    const drawShootingStar = () => {
      const centerX = shootingStar.x;
      const centerY = shootingStar.y;
      const radius = shootingStar.radius;
      const startAngle = 0;
      const endAngle = Math.PI * 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.fillStyle = `rgb(255, 255, 255)`;
      ctx.fill();

      const arcEndX = shootingStar.lastX;
      const arcEndY = shootingStar.lastY;

      // Randomize control points for the trail
      const control1X = arcEndX + Math.random() * 20 - 10;
      const control1Y = arcEndY + Math.random() * 20 - 10;
      const control2X = arcEndX + Math.random() * 20 - 10;
      const control2Y = arcEndY + Math.random() * 20 - 10;

      const endX = centerX;
      const endY = centerY;

      ctx.beginPath();
      ctx.moveTo(arcEndX, arcEndY);
      ctx.bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.stroke();
    };

    const animateShootingStar = () => {
      generateRandomDirection();

      const [p0, p1, p2, p3] = points;

      const cx = 3 * (p1.x - p0.x);
      const bx = 3 * (p2.x - p1.x) - cx;
      const ax = p3.x - p0.x - cx - bx;
      const cy = 3 * (p1.y - p0.y);
      const by = 3 * (p2.y - p1.y) - cx;
      const ay = p3.y - p0.y - cx - bx;

      const t = shootingStar.t;
      shootingStar.t += shootingStar.speed;

      // Calculate new x + y of the star using Bezier curve math
      const xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
      const yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;

      if (shootingStar.t > 1) {
        shootingStar.t = 1;
      }

      // Update position and last position for the trail
      shootingStar.lastX = shootingStar.x;
      shootingStar.lastY = shootingStar.y;

      shootingStar.x = xt;
      shootingStar.y = yt;

      drawShootingStar();
    };

    const generateRandomDirection = () => {
      const direction = Math.floor(Math.random() * 4);

      switch (direction) {
        case 0: // Left to Right
          points[0] = { x: 0, y: Math.random() * canvas.height };
          points[3] = { x: canvas.width, y: Math.random() * canvas.height };
          break;
        case 1: // Right to Left
          points[0] = { x: canvas.width, y: Math.random() * canvas.height };
          points[3] = { x: 0, y: Math.random() * canvas.height };
          break;
        case 2: // Top to Bottom
          points[0] = { x: Math.random() * canvas.width, y: 0 };
          points[3] = { x: Math.random() * canvas.width, y: canvas.height };
          break;
        case 3: // Bottom to Top
          points[0] = { x: Math.random() * canvas.width, y: canvas.height };
          points[3] = { x: Math.random() * canvas.width, y: 0 };
          break;
      }

      // Generate random control points
      points[1] = {
        x: points[0].x + (Math.random() * 100 - 50),
        y: points[0].y + (Math.random() * 100 - 50),
      };
      points[2] = {
        x: points[3].x + (Math.random() * 100 - 50),
        y: points[3].y + (Math.random() * 100 - 50),
      };
    };

    const drawInterval = 10000;
    let lastDrawTime = 0;
    let frameCount = 0;

    const animate = (timestamp: number) => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const deltaTime = timestamp - lastDrawTime;

      frameCount++;

      if (deltaTime >= drawInterval) {
        shootingStar.t = 0;
        lastDrawTime = timestamp;

        // animateShootingStar();
      }

      drawStars();
    };

    animate(frameCount);

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
