"use client";

import { usePathname } from "next/navigation";
import { LinkUnderline } from "./ui/link-underline";
import { ThemeToggle } from "./ui/theme-toggle";

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-medium text-slate-800 dark:text-slate-100 text-xl tracking-tight animate-fade-in">
        <LinkUnderline href="/">Truman Chan</LinkUnderline>
      </h1>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 animate-fade-in">
          <LinkUnderline
            href="/"
            isActive={pathname === "/"}
            className="text-sm hover-scale"
          >
            about
          </LinkUnderline>
          <LinkUnderline
            href="/projects"
            isActive={pathname === "/projects"}
            className="text-sm hover-scale"
          >
            projects
          </LinkUnderline>
          <LinkUnderline
            href="/writing"
            isActive={pathname === "/writing"}
            className="text-sm hover-scale"
          >
            blog
          </LinkUnderline>
          <LinkUnderline
            href="/gallery"
            isActive={pathname === "/gallery"}
            className="text-sm hover-scale"
          >
            gallery
          </LinkUnderline>
        </nav>
        <div className="animate-fade-in">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
