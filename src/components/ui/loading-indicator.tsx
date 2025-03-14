"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: isLoading ? 0.8 : 0,
        opacity: isLoading ? 1 : 0,
        transition: {
          scaleX: {
            duration: isLoading ? 0.5 : 0.2,
            ease: isLoading ? "easeOut" : "easeIn",
          },
          opacity: {
            duration: 0.3,
          },
        },
      }}
      style={{ transformOrigin: "left" }}
    />
  );
}
