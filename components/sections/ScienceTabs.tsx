"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScienceTabItem {
  id: string;
  title: string;
  content: string;
}

interface ScienceTabsProps {
  items: ScienceTabItem[];
  className?: string;
}

export default function ScienceTabs({ items, className }: ScienceTabsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className={cn("", className)}>
      <div
        role="tablist"
        aria-label="Science pillars"
        className="flex flex-wrap gap-8 border-b border-border pb-6 mb-12"
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={activeId === item.id}
            aria-controls={`panel-${item.id}`}
            id={`tab-${item.id}`}
            onClick={() => setActiveId(item.id)}
            className={cn(
              "relative text-left text-body-lg font-light tracking-tight transition-colors duration-300 pb-2",
              activeId === item.id ? "text-secondary" : "text-text-muted hover:text-secondary"
            )}
          >
            {item.title}
            {activeId === item.id && (
              <motion.span
                layoutId="science-tab-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-body text-text-muted leading-relaxed max-w-3xl"
            >
              {active.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
