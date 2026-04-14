"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useScrollTheme, type ScrollTheme } from "@/components/providers/ScrollThemeProvider";

interface ThemeSectionProps {
  theme: ScrollTheme;
  children: React.ReactNode;
}

export default function ThemeSection({ theme, children }: ThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setTheme } = useScrollTheme();

  useEffect(() => {
    if (!isInView) return;
    setTheme(theme);
  }, [isInView, theme, setTheme]);

  return <div ref={ref}>{children}</div>;
}
