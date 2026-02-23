import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-surface-muted"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-4 lg:gap-16">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-[1.25rem] font-light tracking-[0.22em] uppercase text-secondary"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-6 max-w-md text-body text-text-muted leading-relaxed">
              Clinical-luxury skincare engineered for skin longevity.
              Swiss precision meets molecular science.
            </p>
          </div>

          <div>
            <h3 className="text-caption font-medium tracking-[0.1em] uppercase text-text-muted mb-8">
              Navigate
            </h3>
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-caption font-medium tracking-[0.1em] uppercase text-text-muted mb-8">
              Legal
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/contact"
                  className="text-body text-secondary hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-body text-text-muted">Privacy Policy</span>
              </li>
              <li>
                <span className="text-body text-text-muted">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-caption text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-caption text-text-muted">
            Barcelona &middot; Andorra
          </p>
        </div>
      </div>
    </footer>
  );
}
