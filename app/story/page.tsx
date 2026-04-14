import type { Metadata } from "next";
import CinematicHero from "@/components/sections/CinematicHero";
import StoryPageContent from "@/components/sections/StoryPageContent";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Zero Lines brand story. A clinical luxury skincare brand and European skin longevity brand built on conviction, not marketing.",
};

export default function StoryPage() {
  return (
    <>
      <CinematicHero
        title="A Conviction, Not a Brand"
        subtitle="Zero Lines was built on a single belief: that the skincare industry had confused the appearance of results with results themselves."
        mediaSrc={PLACEHOLDER_IMAGES.story}
        mediaAlt="Minimal architectural light and shadow with a clinical-luxury mood"
        layout="split"
      />
      <StoryPageContent />
    </>
  );
}
