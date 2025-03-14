import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import { NavigationProvider } from "@/app/navigation-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truman Chan | Software Engineer & Student",
  description: "Personal website of Truman Chan - Software Engineer, Computer Science & Business Management Student",
  keywords: ["Truman Chan", "Software Engineer", "Web Developer", "Student", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="font-sans flex justify-center bg-slate-100 dark:bg-slate-900 min-h-screen selection:bg-slate-300 dark:selection:bg-slate-700 bg-[radial-gradient(#e2e6ec_1px,transparent_1px)] dark:bg-[radial-gradient(#283143_1px,transparent_1px)] [background-size:16px_16px]">
        <Providers>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </Providers>
      </body>
    </html>
  );
}
