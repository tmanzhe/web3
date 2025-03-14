"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BearCursorProps {
  isVisible: boolean;
  position: { x: number; y: number };
}

export function BearCursor({ isVisible, position }: BearCursorProps) {
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsClicking(true);

        // Reset clicking state after animation
        setTimeout(() => {
          setIsClicking(false);
        }, 500);
      }, 1200); // Time to wait before clicking (after bar is filled)

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: position.x - 20, // Center the bear around cursor
            y: position.y - 20
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Bear face */}
            <div className={`w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center transition-all duration-300 ${isClicking ? 'transform scale-90' : ''}`}>
              {/* Eyes */}
              <div className="absolute w-1.5 h-1.5 bg-slate-800 rounded-full" style={{ top: '10px', left: '12px' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-slate-800 rounded-full" style={{ top: '10px', right: '12px' }}></div>

              {/* Snout */}
              <div className="absolute w-5 h-3 bg-amber-300 rounded-full" style={{ top: '16px', left: '50%', transform: 'translateX(-50%)' }}>
                {/* Nose */}
                <div className="absolute w-2 h-1.5 bg-slate-800 rounded-full" style={{ top: '0.5px', left: '50%', transform: 'translateX(-50%)' }}></div>
              </div>

              {/* Ears */}
              <div className="absolute w-3 h-3 bg-amber-300 rounded-full" style={{ top: '-3px', left: '6px' }}></div>
              <div className="absolute w-3 h-3 bg-amber-300 rounded-full" style={{ top: '-3px', right: '6px' }}></div>
            </div>

            {/* Click animation */}
            {isClicking && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-slate-600 font-bold text-xs">Click!</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
