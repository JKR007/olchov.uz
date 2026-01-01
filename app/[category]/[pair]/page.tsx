import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, findPair, UNITS, type CategorySlug } from "@/config/routes";
import ConverterClient from "@/components/ConverterClient";
import type { ConversionCategory } from "@/conversions";

type Params = Promise<{ category: string; pair: string }>;

export function generateStaticParams() {
  return (
    Object.entries(CATEGORIES) as Array<[CategorySlug, (typeof CATEGORIES)[CategorySlug]]>
  ).flatMap(([category, cfg]) =>
    cfg.pairs.map((p) => ({
      category,
      pair: `${p.from}-${p.to}`,
    }))
  );
}

function getUnitLabel(unitSlug: string, includeSymbol = false) {
  const u = Object.values(UNITS).find((x) => x.slug === unitSlug);
  if (!u) return unitSlug;
  if (includeSymbol && u.symbol) {
    return `${u.label} (${u.symbol})`;
  }
  return u.label;
}

function getUnitSymbol(unitSlug: string): string | undefined {
  const u = Object.values(UNITS).find((x) => x.slug === unitSlug);
  return u?.symbol;
}

function getUnitVariants(unitSlug: string) {
  const u = Object.values(UNITS).find((x) => x.slug === unitSlug);
  return u?.variants ?? [];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category, pair: pairSlug } = await params;
  const found = findPair(category, pairSlug);
  if (!found) return {};

  const { config, from, to, pair } = found;

  // SEO Page Template'ga mos title/description
  const fromLabel = getUnitLabel(from);
  const toLabel = getUnitLabel(to);

  const fromVariants = getUnitVariants(from).slice(0, 3);
  const toVariants = getUnitVariants(to).slice(0, 3);

  const extraKeywords = [...(pair.keywords ?? []), ...fromVariants, ...toVariants].filter(Boolean);

  const title = `1 ${fromLabel} necha ${toLabel}? (${extraKeywords
    .slice(0, 4)
    .join(", ")}) | olchov.uz`;

  const description = `${fromLabel} ni ${toLabel} ga tez va aniq aylantiring. ${
    extraKeywords.length ? `Variantlar: ${extraKeywords.slice(0, 6).join(", ")}.` : ""
  } Onlayn bepul konvertor — olchov.uz`;

  return {
    title,
    description,
    alternates: { canonical: `/${config.slug}/${from}-${to}` },
  };
}

export default async function ConverterPage({ params }: { params: Params }) {
  const { category, pair: pairSlug } = await params;

  const found = findPair(category, pairSlug);
  if (!found) {
    notFound();
  }

  const { config, from, to } = found;

  const fromLabel = getUnitLabel(from);
  const toLabel = getUnitLabel(to);

  const reverseHref = `/${config.slug}/${to}-${from}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          Bosh sahifa
        </Link>
        <span>→</span>
        <Link href={`/${config.slug}`} className="hover:underline">
          {config.label}
        </Link>
      </div>

      <header className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          {fromLabel}ni {toLabel}ga aylantirish
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {fromLabel}ni {toLabel}ga tez va aniq aylantiring. Real vaqtda hisob-kitob.
        </p>
      </header>

      {/* Converter UI */}
      <ConverterClient
        category={config.slug as ConversionCategory}
        from={from}
        to={to}
        fromLabel={fromLabel}
        toLabel={toLabel}
        fromSymbol={getUnitSymbol(from)}
        toSymbol={getUnitSymbol(to)}
        reverseHref={reverseHref}
      />

      {/* Formula / Explanation block (SEO template) */}
      <section className="mt-8 space-y-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          {fromLabel}dan {toLabel}ga o&apos;tkazish formulasi
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Bu yerda qisqa va aniq izoh bo&apos;ladi.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Foydalanuvchilar {fromLabel}ni turlicha yozishi mumkin (masalan:{" "}
          {getUnitVariants(from).slice(0, 4).join(", ") || "—"}).
        </p>
      </section>

      {/* Related links (minimal) */}
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Bog&apos;liq konvertorlar
        </h2>
        <div className="mt-3 space-y-2">
          {/* Related conversions: reverse + first 2 in category */}
          <Link
            className="block text-sm text-gray-900 hover:underline dark:text-white"
            href={reverseHref}
          >
            {toLabel} → {fromLabel}
          </Link>

          {config.pairs
            .filter(
              (p) =>
                `${p.from}-${p.to}` !== `${from}-${to}` && `${p.from}-${p.to}` !== `${to}-${from}`
            )
            .slice(0, 2)
            .map((p) => {
              const href = `/${config.slug}/${p.from}-${p.to}`;
              return (
                <Link
                  key={href}
                  className="block text-sm text-gray-900 hover:underline dark:text-white"
                  href={href}
                >
                  {getUnitLabel(p.from)} → {getUnitLabel(p.to)}
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}
