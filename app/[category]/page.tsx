import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, type CategorySlug } from "@/config/routes";

type Params = { category: string };

export function generateStaticParams() {
  return (Object.keys(CATEGORIES) as CategorySlug[]).map((category) => ({
    category,
  }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const category = params.category as CategorySlug;
  const cfg = CATEGORIES[category];
  if (!cfg) return {};

  return {
    title: `${cfg.label} konvertori | olchov.uz`,
    description: cfg.description,
    alternates: { canonical: `/${cfg.slug}` },
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = params.category as CategorySlug;
  const cfg = CATEGORIES[category];
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
                className="rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {p.from} → {p.to}
                </div>
                {p.keywords?.length ? (
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                    Qidiruv variantlari: {p.keywords.slice(0, 3).join(", ")}
                  </div>
                ) : null}
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">{href}</div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
