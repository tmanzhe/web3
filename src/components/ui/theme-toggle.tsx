"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8"></div>;
  }

  return (
    <button
      className="p-2 rounded-lg bg-white border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:shadow-md hover:scale-105"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className="transition-transform duration-500" style={{ transform: theme === "dark" ? "rotate(40deg)" : "rotate(0deg)" }}>
        {theme === "dark" ? (
          <Sun className="h-4 w-4 animate-pulse" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </div>
    </button>
  );
}
