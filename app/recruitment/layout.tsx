import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { recruitmentContent, recruitmentImageSlots } from "@/lib/recruitmentContent";

const en = recruitmentContent.en;
const recruitmentUrl = `${SITE_URL}/recruitment`;

export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
  alternates: {
    canonical: "/recruitment",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: recruitmentUrl,
    siteName: SITE_NAME,
    title: `${en.metaTitle} | ${SITE_NAME}`,
    description: en.metaDescription,
    images: [
      {
        url: recruitmentImageSlots.heroPrimary.src,
        alt: recruitmentImageSlots.heroPrimary.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${en.metaTitle} | ${SITE_NAME}`,
    description: en.metaDescription,
    images: [recruitmentImageSlots.heroPrimary.src],
  },
};

export default function RecruitmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
