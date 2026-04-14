"use client";

import { usePathname } from "next/navigation";
import PrestigeNavbar from "@/components/layout/PrestigeNavbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ScrollThemeProvider from "@/components/providers/ScrollThemeProvider";

const SHELLLESS_PREFIXES = ["/recruitment"];

function isShelllessPath(pathname: string): boolean {
  return SHELLLESS_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isShellless = isShelllessPath(pathname);

  return (
    <ScrollThemeProvider>
      {!isShellless && <PrestigeNavbar />}
      <main id="main-content">
        <PageTransition>{children}</PageTransition>
      </main>
      {!isShellless && <Footer />}
    </ScrollThemeProvider>
  );
}
