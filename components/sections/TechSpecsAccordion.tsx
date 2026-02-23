"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionSpec {
  label: string;
  value: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  specs: AccordionSpec[];
}

interface TechSpecsAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function TechSpecsAccordion({
  items,
  allowMultiple = false,
}: TechSpecsAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const baseId = useId();

  function toggle(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-border">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const triggerId = `${baseId}-trigger-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id} className="group">
            <button
              id={triggerId}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={cn(
                "flex w-full items-center justify-between py-8 lg:py-10 text-left",
                "transition-colors hover:text-primary duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              )}
            >
              <span className="text-h4 font-light tracking-tight text-secondary pr-10">
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-text-muted" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.35, ease: "easeInOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-12 lg:pb-14">
                    {item.description && (
                      <p className="text-body text-text-muted mb-10 max-w-2xl leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {item.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex flex-col gap-2 p-6 bg-white rounded-sm border border-border"
                        >
                          <span className="text-caption font-medium tracking-[0.04em] uppercase text-text-muted">
                            {spec.label}
                          </span>
                          <span className="text-body font-medium text-secondary">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
