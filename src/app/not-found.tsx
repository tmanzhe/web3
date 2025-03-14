"use client";

import Link from "next/link";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate the eye movement based on mouse position
  const calculateEyeMovement = (baseX: number, baseY: number) => {
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

    // Limit the eye movement to a small range
    const maxOffset = 3;

    const dx = ((mousePosition.x - centerX) / centerX) * maxOffset;
    const dy = ((mousePosition.y - centerY) / centerY) * maxOffset;

    return { x: baseX + dx, y: baseY + dy };
  };

  const leftEye = calculateEyeMovement(146, 116);
  const rightEye = calculateEyeMovement(174, 116);

  return (
    <Layout>
      <motion.div
        className="flex flex-col items-center justify-center pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-80 h-80"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Bear face */}
          <motion.div
            className="w-64 h-64 bg-amber-200 rounded-full mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Ears */}
            <motion.div
              className="absolute w-20 h-20 bg-amber-300 rounded-full -top-4 -left-2"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute w-20 h-20 bg-amber-300 rounded-full -top-4 right-0"
              animate={{ rotate: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            ></motion.div>

            {/* Eyes */}
            <div className="absolute w-8 h-8 bg-white rounded-full" style={{ top: '110px', left: '130px' }}>
              <motion.div
                className="w-4 h-4 bg-slate-900 rounded-full absolute"
                style={{ top: '2px', left: '2px' }}
                animate={{ x: leftEye.x - 130, y: leftEye.y - 110 }}
              ></motion.div>
            </div>
            <div className="absolute w-8 h-8 bg-white rounded-full" style={{ top: '110px', left: '160px' }}>
              <motion.div
                className="w-4 h-4 bg-slate-900 rounded-full absolute"
                style={{ top: '2px', left: '2px' }}
                animate={{ x: rightEye.x - 160, y: rightEye.y - 110 }}
              ></motion.div>
            </div>

            {/* Snout */}
            <div className="absolute w-32 h-20 bg-amber-300 rounded-full" style={{ top: '140px', left: '80px' }}>
              {/* Nose */}
              <div className="absolute w-10 h-6 bg-slate-900 rounded-full" style={{ top: '5px', left: '40px' }}></div>

              {/* Mouth - sad for 404 */}
              <motion.div
                className="absolute w-20 h-1 bg-slate-900 rounded-full"
                style={{ top: '30px', left: '30px' }}
                animate={{
                  d: ["M10,10 Q30,20 50,10", "M10,20 Q30,10 50,20", "M10,10 Q30,20 50,10"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="80" height="40" viewBox="0 0 80 40" className="absolute -top-5 -left-10">
                  <motion.path
                    d="M20,20 Q40,35 60,20"
                    stroke="#1e293b"
                    strokeWidth="2"
                    fill="transparent"
                    animate={{
                      d: ["M20,20 Q40,35 60,20", "M20,20 Q40,30 60,20", "M20,20 Q40,35 60,20"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Four-Oh-Four */}
          <motion.div
            className="absolute -top-10 left-0 right-0 text-center text-6xl font-bold text-slate-800 dark:text-slate-100"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            404
          </motion.div>
        </motion.div>

        <motion.h1
          className="mt-8 text-2xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="mt-4 text-slate-600 dark:text-slate-400 text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-md transition-all duration-300 button-hover"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
