"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 页面加载动画
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 页面加载完成后隐藏加载动画
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5秒后消失

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-white dark:bg-black flex items-center justify-center"
        >
          {/* Logo 和加载动画 */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-5xl font-bold">
                <span className="text-black dark:text-white">FX</span>
                <span className="text-gray-400 dark:text-gray-600">Killer</span>
              </div>
            </motion.div>

            {/* 加载条 */}
            <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="h-full w-1/2 bg-black dark:bg-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
