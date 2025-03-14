"use client";

import { Nav } from "./nav";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto px-8 py-8 md:py-16 text-slate-600 dark:text-slate-400 font-[380]">
      <Nav />
      <main className="mt-6">{children}</main>
      <Footer />
    </div>
  );
}
