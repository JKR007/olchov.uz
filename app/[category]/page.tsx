import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, UNITS, type CategorySlug } from "@/config/routes";

function getUnitLabel(unitSlug: string): string {
  const unit = Object.values(UNITS).find((u) => u.slug === unitSlug);
  return unit?.label ?? unitSlug;
}

type Params = Promise<{ category: string }>;

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategorySlug[]).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params;
  const cfg = CATEGORIES[category as CategorySlug];
  if (!cfg) return {};

  return {
    title: `${cfg.label} konvertori | olchov.uz`,
    description: cfg.description,
    alternates: { canonical: `/${cfg.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cfg = CATEGORIES[category as CategorySlug];
  if (!cfg) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-gray-600 hover:underline dark:text-gray-400">
        ← Bosh sahifa
      </Link>

      <header className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          {cfg.label}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{cfg.description}</p>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Konvertorlar</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cfg.pairs.map((p, idx) => {
            const href = `/${cfg.slug}/${p.from}-${p.to}`;
            return (
              <Link
                key={`${href}-${idx}`}
                href={href}
                className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700"
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {getUnitLabel(p.from)} → {getUnitLabel(p.to)}
                </div>
                {p.keywords?.length ? (
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    Qidiruv variantlari: {p.keywords.slice(0, 3).join(", ")}
                  </div>
                ) : null}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
