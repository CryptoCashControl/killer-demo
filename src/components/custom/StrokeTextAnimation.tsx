"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StrokeTextAnimationProps {
  className?: string;
  loop?: boolean;
}

export default function StrokeTextAnimation({ className = "", loop = true }: StrokeTextAnimationProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const strokeColor = isDark ? "#ffffff" : "#000000";
  const fillColor = isDark ? "#ffffff" : "#000000";

  // 动画配置
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  const fillVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // 循环动画配置
  const transition = {
    duration: 2,
    ease: "easeInOut" as const,
    repeat: loop ? Infinity : 0,
    repeatDelay: 1,
  };

  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {/* 军刀 - SVG 手写动画 */}
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* 汇字 - 简化笔画路径 */}
        <motion.path
          d="M 30 30 L 70 30"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0 }}
        />
        <motion.path
          d="M 50 30 L 50 70"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.2 }}
        />
        <motion.path
          d="M 30 50 L 70 50"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.4 }}
        />
        <motion.path
          d="M 25 70 L 50 60 L 75 70"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.6 }}
        />

        {/* 刃字 - 拆分：点 + 刀 */}
        {/* 点（丶）从上往下 */}
        <motion.circle
          cx="110"
          cy="25"
          r="3"
          fill={fillColor}
          variants={fillVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.8 }}
        />

        {/* 刀字部分 */}
        <motion.path
          d="M 100 35 L 130 35"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 1.0 }}
        />
        <motion.path
          d="M 115 35 L 115 75"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 1.2 }}
        />
        <motion.path
          d="M 95 55 L 135 55"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 1.4 }}
        />
        <motion.path
          d="M 100 70 L 130 75"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 1.6 }}
        />
      </svg>

      {/* FxKiller - 英文动画 */}
      <svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* F - 竖线 + 两条横线 */}
        <motion.path
          d="M 20 30 L 20 70"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0 }}
        />
        <motion.path
          d="M 20 30 L 45 30"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.15 }}
        />
        <motion.path
          d="M 20 50 L 40 50"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.3 }}
        />

        {/* x - 两条对角线同时画出 */}
        <motion.path
          d="M 55 35 L 75 65"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.45 }}
        />
        <motion.path
          d="M 75 35 L 55 65"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.45 }}
        />

        {/* Killer - 使用文本路径动画 */}
        <motion.text
          x="95"
          y="60"
          fill={fillColor}
          fontSize="40"
          fontWeight="bold"
          fontFamily="Inter, sans-serif"
          variants={fillVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...transition, delay: 0.6, duration: 0.5 }}
        >
          Killer
        </motion.text>
      </svg>
    </div>
  );
}
