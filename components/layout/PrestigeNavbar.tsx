"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HERO_ROUTES = ["/", "/science", "/story", "/technology"];

export default function PrestigeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const hasHero = HERO_ROUTES.includes(pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 48);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500",
        "pt-[env(safe-area-inset-top)]",
        isMobileOpen ? "z-30" : "z-50",
        isScrolled || !hasHero
          ? "bg-white/75 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-black/10"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 sm:h-20 lg:h-24 max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-16"
      >
        <Link href="/" className="relative z-50" aria-label="Zero Lines home">
          <span
            className={cn(
              "text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-light tracking-[0.2em] lg:tracking-[0.22em] uppercase transition-colors duration-300",
              "text-secondary"
            )}
          >
            Zero Lines
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-14">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[0.8125rem] font-medium tracking-[0.1em] uppercase transition-colors duration-300",
                  pathname === link.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/pre-launch"
          className={cn(
            "hidden lg:inline-flex items-center h-12 px-8",
            "text-[0.8125rem] font-medium tracking-[0.08em] uppercase",
            "transition-all duration-300",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            "bg-secondary text-white hover:bg-primary"
          )}
        >
          Early Access
        </Link>

        <button
          className="relative z-50 lg:hidden p-3 -mr-3"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
          )}
        </button>
      </nav>

      {/* Mobile menu rendered in a portal so it's always on top of page content (avoids stacking-context traps) */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMobileOpen && (
              <>
                <motion.div
                  role="presentation"
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed inset-0 z-[9998] bg-black/60 lg:hidden"
                  onClick={() => setIsMobileOpen(false)}
                />
                <motion.div
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-0 right-0 bottom-0 z-[9999] w-[min(300px,88vw)] sm:w-[min(340px,90vw)] bg-white shadow-2xl lg:hidden flex flex-col pt-[env(safe-area-inset-top)]"
                >
                  <div className="flex items-center justify-between shrink-0 h-20 px-5 sm:px-6 border-b border-border">
                    <span className="text-[1rem] sm:text-[1.125rem] font-light tracking-[0.2em] uppercase text-secondary">
                      Zero Lines
                    </span>
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="p-2 -mr-2 rounded-md border border-primary/40 text-secondary hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-6">
                    <ul className="space-y-0">
                      {NAV_LINKS.map((link, i) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 12 }}
                          transition={{
                            duration: 0.25,
                            delay: i * 0.04,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={cn(
                              "block text-[1.125rem] sm:text-[1.25rem] font-light tracking-tight py-3.5 transition-colors duration-300",
                              pathname === link.href ? "text-primary" : "text-secondary hover:text-primary"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-8 pt-6 border-t border-border"
                    >
                      <Link
                        href="/pre-launch"
                        onClick={() => setIsMobileOpen(false)}
                        className="inline-flex items-center justify-center h-12 w-full px-6 bg-secondary text-white text-[0.8125rem] font-medium tracking-[0.08em] uppercase hover:bg-primary transition-colors duration-300"
                      >
                        Early Access
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
