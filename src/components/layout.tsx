"use client";

import { Nav } from "./nav";
import { Footer } from "./footer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Gallery", href: "/gallery" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e530_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e530_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      <div className="relative flex flex-col gap-6 w-full max-w-3xl mx-auto px-8 py-8 md:py-16 text-slate-600 dark:text-slate-400 font-[380]">
        <Nav />
        <main className="mt-6">{children}</main>
        <Footer />
      </div>
    </>
  );
}
