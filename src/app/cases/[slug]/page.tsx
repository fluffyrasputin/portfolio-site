import { notFound } from "next/navigation";
import { CaseDetailPage } from "@/components/case-detail-page";
import { cases, getCaseBySlug } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return <CaseDetailPage item={item} />;
}
