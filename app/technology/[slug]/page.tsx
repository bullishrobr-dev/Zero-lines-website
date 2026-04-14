import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TECHNOLOGY_SLUGS } from "@/lib/constants";
import { getTechnologyContent } from "@/lib/technologyContent";
import TechnologyDetailPage from "@/components/sections/TechnologyDetailPage";

interface TechnologySlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TECHNOLOGY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TechnologySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getTechnologyContent(slug);
  if (!content) return {};

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | Zero Lines`,
      description: content.metaDescription,
    },
  };
}

export default async function TechnologySlugPage({ params }: TechnologySlugPageProps) {
  const { slug } = await params;
  const content = getTechnologyContent(slug);

  if (!content) {
    notFound();
  }

  return <TechnologyDetailPage content={content} />;
}
