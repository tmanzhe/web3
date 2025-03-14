"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const baseClass = `
    relative
    inline-flex items-center
    text-slate-600 dark:text-slate-300
    transition-all duration-300
    hover:text-slate-800 dark:hover:text-slate-100
  `;

  const animatedClass = `
    after:absolute
    after:left-0
    after:bottom-0
    after:h-[1px]
    after:w-0
    after:bg-slate-400 dark:after:bg-slate-400
    after:transition-all
    after:duration-[1500ms]
    after:ease-out
    hover:after:w-full
    dark:hover:after:bg-slate-200
  `;

  return (
    <Link
      href={href}
      className={cn(
        baseClass,
        !isActive && animatedClass,
        isActive && "text-slate-800 dark:text-slate-100 font-medium",
        className,
        isActive && activeClassName
      )}
    >
      {children}
    </Link>
  );
}
