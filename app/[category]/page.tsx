import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, UNITS, type CategorySlug } from "@/config/routes";
import { getCategoryIcon } from "@/lib/categoryIcons";

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
      <div className="flex flex-wrap items-center gap-2 text-base text-gray-600 dark:text-gray-400">
        <Link
          href="/"
          className="transition-colors hover:text-blue-600 hover:underline dark:hover:text-blue-400"
        >
          Bosh sahifa
        </Link>
        <span>→</span>
        <span className="text-gray-900 dark:text-white">{cfg.label}</span>
      </div>

      <header className="mt-4">
        <h1 className="flex items-center gap-2 text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
          <span>{getCategoryIcon(category as CategorySlug)}</span>
          <span>{cfg.label}</span>
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{cfg.description}</p>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Konvertorlar</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cfg.pairs.map((p, idx) => {
            const href = `/${cfg.slug}/${p.from}-${p.to}`;
            return (
              <Link
                key={`${href}-${idx}`}
                href={href}
                className="group block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600 dark:hover:bg-blue-900/20"
              >
                <div className="text-base font-medium text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {getUnitLabel(p.from)} → {getUnitLabel(p.to)}
                </div>
                {p.keywords?.length ? (
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
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
