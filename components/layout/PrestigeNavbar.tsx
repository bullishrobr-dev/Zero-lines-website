"use client";

import { useState, useEffect } from "react";
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
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const hasHero = HERO_ROUTES.includes(pathname);
  const isLight = hasHero && !isScrolled && !isMobileOpen;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgb(0_0_0/0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-8 lg:px-16"
      >
        <Link href="/" className="relative z-50" aria-label="Zero Lines home">
          <span
            className={cn(
              "text-[1.25rem] font-light tracking-[0.22em] uppercase transition-colors duration-300",
              isLight ? "text-white" : "text-secondary"
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
                    : isLight
                      ? "text-white/90 hover:text-white"
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
            isLight
              ? "bg-white text-secondary hover:bg-primary hover:text-white"
              : "bg-secondary text-white hover:bg-primary"
          )}
        >
          Begin Protocol
        </Link>

        <button
          className="relative z-50 lg:hidden p-3 -mr-3"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className={cn("h-6 w-6", isLight ? "text-white" : "text-secondary")} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-start justify-center h-full px-12">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "block text-[2.25rem] font-light tracking-tight py-4 transition-colors duration-300",
                        pathname === link.href ? "text-primary" : "text-secondary hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-16"
              >
                <Link
                  href="/pre-launch"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center h-14 px-12 bg-secondary text-white text-[0.9375rem] font-medium tracking-[0.06em] uppercase hover:bg-primary transition-colors duration-300"
                >
                  Begin Protocol
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
