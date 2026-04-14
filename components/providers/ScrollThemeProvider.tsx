"use client";

import { createContext, useCallback, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export type ScrollTheme = "light" | "dark";

const THEME_VALUES = {
  light: {
    backgroundColor: "#FFFFFF",
    color: "#1A1A1A",
  },
  dark: {
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
  },
} as const;

const LUXURY_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

interface ScrollThemeContextValue {
  theme: ScrollTheme;
  setTheme: (theme: ScrollTheme) => void;
}

const ScrollThemeContext = createContext<ScrollThemeContextValue | null>(null);

export function useScrollTheme(): ScrollThemeContextValue {
  const ctx = useContext(ScrollThemeContext);
  if (!ctx) {
    throw new Error("useScrollTheme must be used within ScrollThemeProvider");
  }
  return ctx;
}

interface ScrollThemeProviderProps {
  children: React.ReactNode;
}

const THEME_BY_SCROLL_ROUTES = ["/"];

export default function ScrollThemeProvider({ children }: ScrollThemeProviderProps) {
  const pathname = usePathname();
  const [theme, setThemeState] = useState<ScrollTheme>("light");

  const setTheme = useCallback((next: ScrollTheme) => {
    setThemeState((prev) => (prev === next ? prev : next));
  }, []);

  // On pages that don't use ThemeSection, start with light theme so nav and content are readable
  useEffect(() => {
    if (!THEME_BY_SCROLL_ROUTES.includes(pathname ?? "")) {
      setThemeState("light");
    }
  }, [pathname]);

  const values = THEME_VALUES[theme];

  return (
    <ScrollThemeContext.Provider value={{ theme, setTheme }}>
      <motion.div
        data-theme={theme}
        className="scroll-theme-wrapper min-h-full"
        initial={false}
        animate={{
          backgroundColor: values.backgroundColor,
          color: values.color,
        }}
        transition={LUXURY_TRANSITION}
      >
        {children}
      </motion.div>
    </ScrollThemeContext.Provider>
  );
}
