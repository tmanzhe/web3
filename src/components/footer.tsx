"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="animate-slide-up stagger-1 opacity-0">{new Date().getFullYear()} © Truman Chan</p>
        <div className="flex gap-4 animate-slide-up stagger-2 opacity-0">
          <Link
            href="https://github.com/tmanzhe"
            target="_blank"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/trumanchan/"
            target="_blank"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://x.com/tmanzhe"
            target="_blank"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 hover:scale-110"
            aria-label="X (Twitter) Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"/></svg>
          </Link>
          <Link
            href="mailto:trumanzhe@gmail.com"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
