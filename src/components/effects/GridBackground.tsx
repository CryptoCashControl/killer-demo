"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// 交互式网格背景
export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 获取当前主题
    const isDark = document.documentElement.classList.contains('dark');

    // 网格参数
    const gridSpacing = 50; // 网格间距
    const dotRadius = 1.5; // 点的半径
    const interactionRadius = 150; // 鼠标影响范围

    // 绘制网格
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 计算网格点的行列数
      const cols = Math.ceil(canvas.width / gridSpacing);
      const rows = Math.ceil(canvas.height / gridSpacing);

      // 绘制每个网格点
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSpacing;
          const y = j * gridSpacing;

          // 计算与鼠标的距离
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // 根据距离调整点的大小和透明度
          let size = dotRadius;
          let opacity = 0.2;

          if (distance < interactionRadius) {
            const factor = 1 - distance / interactionRadius;
            size = dotRadius + factor * 2;
            opacity = 0.2 + factor * 0.4;
          }

          // 绘制点
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`;
          ctx.fill();
        }
      }
    };

    // 动画循环
    let animationId: number;
    const animate = () => {
      drawGrid();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // 监听鼠标移动
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
