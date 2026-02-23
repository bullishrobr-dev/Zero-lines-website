import type { Metadata, Viewport } from "next";
import { inter } from "@/lib/fonts";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import PrestigeNavbar from "@/components/layout/PrestigeNavbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Skin Longevity Protocol`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Skin Longevity Protocol`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0ABAB5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface text-text-primary antialiased font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <PrestigeNavbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
