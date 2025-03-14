"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/app/navigation-provider";

interface LinkUnderlineProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
}

export function LinkUnderline({
  href,
  children,
  className,
  isActive,
  activeClassName,
}: LinkUnderlineProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  const { startNavigation } = useNavigation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);

  // Handle auto-click after 3 seconds
  useEffect(() => {
    // Only set up animation if hovered and not already active/navigating
    if (isHovered && !isActive && !isNavigatingRef.current) {
      // Reset any previous state
      setProgress(0);

      // Set start time
      startTimeRef.current = Date.now();

      // Clear any existing timeouts or animation frames
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

      // Start progress animation
      const updateProgress = () => {
        if (!startTimeRef.current || isNavigatingRef.current) return;

        const elapsed = Date.now() - startTimeRef.current;
        const newProgress = Math.min(elapsed / 3000, 1);
        setProgress(newProgress);

        if (newProgress < 1) {
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        } else {
          // Once we reach 100%, navigate
          handleNavigation();
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);

      // Backup timeout
      timeoutRef.current = setTimeout(() => {
        handleNavigation();
      }, 3000);
    } else if (!isHovered || isActive) {
      // Reset when not hovering
      resetAnimation();
    }

    return resetAnimation;
  }, [isHovered, isActive]);

  const resetAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    startTimeRef.current = null;
    setProgress(0);
  };

  const handleNavigation = () => {
    if (!isNavigatingRef.current) {
      isNavigatingRef.current = true;
      startNavigation();
      router.push(href);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For immediate clicks, we use regular navigation
    resetAnimation();
    startNavigation();
    // We let the default Link behavior handle the navigation
  };

  const baseClass = `
    relative
    inline-flex items-center
    text-slate-600 dark:text-slate-300
    transition-all duration-500
    hover:text-slate-800 dark:hover:text-slate-100
  `;

  const animatedClass = `
    after:absolute
    after:left-0
    after:bottom-0
    after:h-[1px]
    after:w-0
    after:bg-slate-400 dark:after:bg-slate-500
    after:z-[1]
    after:transition-all
    after:duration-3000
    after:ease-linear
    hover:after:w-full
  `;

  return (
    <div className="relative inline-block">
      <Link
        ref={linkRef}
        href={href}
        className={cn(
          baseClass,
          !isActive && animatedClass,
          isActive && "text-slate-800 dark:text-slate-100 font-medium",
          className,
          isActive && activeClassName
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {children}
      </Link>

      {/* Progress indicator */}
      {isHovered && !isActive && progress > 0 && (
        <div className="absolute left-0 bottom-0 h-[2px] bg-slate-700 dark:bg-slate-300 transition-all duration-100 ease-linear z-10"
             style={{ width: `${progress * 100}%` }}>
        </div>
      )}
    </div>
  );
}
