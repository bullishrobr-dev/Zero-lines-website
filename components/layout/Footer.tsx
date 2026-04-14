import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-surface-muted"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-16">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-light tracking-[0.22em] uppercase text-secondary"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm lg:max-w-md text-caption text-text-muted leading-relaxed">
              Clinical-luxury skincare engineered for skin longevity.
            </p>
          </div>

          <div>
            <h3 className="text-caption font-medium tracking-[0.1em] uppercase text-text-muted mb-4 lg:mb-6">
              Navigate
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption font-medium tracking-[0.1em] uppercase text-text-muted mb-4 lg:mb-6">
              Legal
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-caption text-secondary hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-caption text-text-muted">Privacy Policy</span>
              </li>
              <li>
                <span className="text-caption text-text-muted">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-caption text-text-muted">
            Pyrenees &middot; Barcelona
          </p>
        </div>
      </div>
    </footer>
  );
}
