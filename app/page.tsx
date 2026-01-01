import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, getAllConverterPages, UNITS, findPair } from "@/config/routes";

export const metadata: Metadata = {
  title: "O'lchov birliklari konvertori — Uzunlik, og'irlik, maydon | olchov.uz",
  description:
    "Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring. Bepul va tez — olchov.uz",
  alternates: { canonical: "/" },
};

// Helper: Get unit label from slug
function getUnitLabel(unitSlug: string): string {
  const unit = Object.values(UNITS).find((u) => u.slug === unitSlug);
  return unit?.label ?? unitSlug;
}

// Helper: Get converter page name from path
function getConverterName(path: string): string {
  const parts = path.split("/");
  if (parts.length !== 3) return path;
  const [, category, pair] = parts;
  const found = findPair(category, pair);
  if (!found) return path;
  const fromLabel = getUnitLabel(found.from);
  const toLabel = getUnitLabel(found.to);
  return `${fromLabel} → ${toLabel}`;
}

// Helper: Get most popular converter per category (first pair)
function getPopularConverter(categorySlug: string): string | null {
  const category = CATEGORIES[categorySlug as keyof typeof CATEGORIES];
  if (!category || category.pairs.length === 0) return null;
  const firstPair = category.pairs[0];
  return `/${categorySlug}/${firstPair.from}-${firstPair.to}`;
}

export default function HomePage() {
  const allPages = getAllConverterPages(); // global directory + search uchun

  // V1: homepage "top links" — most popular converters
  const topLinks = [
    "/uzunlik/dyuym-santimetr",
    "/ogirlik/kg-funt",
    "/maydon/kvadrat-metr-sotix",
    "/harorat/selsiy-farengeyt",
    "/hajm/ml-litr",
    "/uzunlik/kilometr-mil",
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
          O&apos;lchov birliklari konvertori
        </h1>

        {/* Quick Category Links */}
        <div className="flex flex-wrap gap-2">
          {(Object.values(CATEGORIES) as Array<(typeof CATEGORIES)[keyof typeof CATEGORIES]>).map(
            (cat) => {
              const popularLink = getPopularConverter(cat.slug);
              if (!popularLink) return null;
              return (
                <Link
                  key={cat.slug}
                  href={popularLink}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {cat.label}
                </Link>
              );
            }
          )}
        </div>

        {/* Global Search (V1 skeleton: keyin client component qilib kuchaytiramiz) */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Qidirish (V1)
          </label>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            Masalan: <span className="font-medium">dyuym sm</span>,{" "}
            <span className="font-medium">metr fut</span>,{" "}
            <span className="font-medium">sotix gektar</span>
          </p>
          <div className="mt-3">
            {/* V1: Search UI placeholder only */}
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Tez orada: qidiruv natijalari shu yerda chiqadi…"
              disabled
            />
          </div>
        </div>
      </section>

      {/* TOP LINKS */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Mashhur konvertatsiyalar
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topLinks.map((href) => {
            const name = getConverterName(href);
            return (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">{name}</div>
                <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  Tez ochish → konvertor sahifasi
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES HUB */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Kategoriyalar</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(Object.values(CATEGORIES) as Array<(typeof CATEGORIES)[keyof typeof CATEGORIES]>).map(
            (cat) => (
              <div
                key={cat.slug}
                className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {cat.label}
                    </div>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    href={`/${cat.slug}`}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  >
                    Barchasi
                  </Link>
                </div>

                <div className="mt-3 space-y-2">
                  {cat.pairs.slice(0, 4).map((p) => {
                    const href = `/${cat.slug}/${p.from}-${p.to}`;
                    const fromLabel = getUnitLabel(p.from);
                    const toLabel = getUnitLabel(p.to);
                    return (
                      <Link
                        key={href}
                        href={href}
                        className="block rounded-lg px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <span className="text-gray-900 dark:text-white">
                          {fromLabel} → {toLabel}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* FULL DIRECTORY (V1) */}
      <section className="mt-10">
        <h2
          className="text-lg font-semibold text-gray-900 dark:text-white"
          id="barcha-konvertorlar"
        >
          Barcha konvertorlar (V1)
        </h2>
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {allPages.map((p) => {
              const name = getConverterName(p.path);
              return (
                <Link
                  key={p.path}
                  href={p.path}
                  className="rounded-lg px-2 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TYPO / VARIANTS SEO BLOCK - Hidden from users, visible to search engines */}
      <div className="sr-only">
        <h2>Yozilish variantlari</h2>
        <p>
          Foydalanuvchilar ayrim birliklarni turlicha yozishi mumkin: metr / metir / miter,
          santimetr / santimeter / sm, dyuym / dyum, selsiy / selsi. Olchov.uz bularni tushunishga
          moslashtiriladi.
        </p>
      </div>

      <footer className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} olchov.uz • Privacy • Terms • Sitemap
      </footer>
    </main>
  );
}
