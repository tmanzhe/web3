"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface NavigationContextType {
  isNavigating: boolean;
  startNavigation: () => void;
  endNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  isNavigating: false,
  startNavigation: () => {},
  endNavigation: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset navigation state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  const startNavigation = () => {
    setIsNavigating(true);
  };

  const endNavigation = () => {
    setIsNavigating(false);
  };

  return (
    <NavigationContext.Provider value={{ isNavigating, startNavigation, endNavigation }}>
      {isNavigating && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50">
          <div
            className="h-full bg-white/20 animate-progress"
            style={{ 
              width: "100%",
              animation: "progress 2s ease-in-out"
            }}
          ></div>
        </div>
      )}
      {children}
    </NavigationContext.Provider>
  );
}
