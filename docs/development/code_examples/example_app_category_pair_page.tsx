// src/app/[category]/[pair]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, findPair, UNITS, type CategorySlug } from "@/config/routes";

// NOTE: Converter UI live-calculation uchun client component kerak bo‘ladi.
// V1 skeleton: hozir server page + minimal UI.
// Keyingi step’da: <ConverterClient /> (useState) qilib to‘liq ishlatamiz.

type Params = { category: string; pair: string };

export function generateStaticParams() {
  return (Object.entries(CATEGORIES) as Array<[CategorySlug, any]>).flatMap(
    ([category, cfg]) =>
      cfg.pairs.map((p: any) => ({
        category,
        pair: `${p.from}-${p.to}`,
      }))
  );
}

function getUnitLabel(unitSlug: string) {
  const u = Object.values(UNITS).find((x) => x.slug === unitSlug);
  return u?.label ?? unitSlug;
}

function getUnitVariants(unitSlug: string) {
  const u = Object.values(UNITS).find((x) => x.slug === unitSlug);
  return u?.variants ?? [];
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const found = findPair(params.category, params.pair);
  if (!found) return {};

  const { config, from, to, pair } = found;

  // SEO Page Template’ga mos title/description (V1)
  const fromLabel = getUnitLabel(from);
  const toLabel = getUnitLabel(to);

  const fromVariants = getUnitVariants(from).slice(0, 3);
  const toVariants = getUnitVariants(to).slice(0, 3);

  const extraKeywords = [
    ...(pair.keywords ?? []),
    ...fromVariants,
    ...toVariants,
  ].filter(Boolean);

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

export default function ConverterPage({ params }: { params: Params }) {
  const found = findPair(params.category, params.pair);
  if (!found) notFound();

  const { config, from, to, pair } = found;

  const fromLabel = getUnitLabel(from);
  const toLabel = getUnitLabel(to);

  const reverseHref = `/${config.slug}/${to}-${from}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Bosh sahifa
        </Link>
        <span>→</span>
        <Link href={`/${config.slug}`} className="hover:underline">
          {config.label}
        </Link>
      </div>

      <header className="mt-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          {fromLabel}ni {toLabel}ga aylantirish
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Bu sahifa V1 skeleton. Keyingi bosqichda kalkulyator inputlari va live
          natija qo‘shamiz.
        </p>
      </header>

      {/* Converter UI placeholder */}
      <section className="mt-8 rounded-xl border p-4">
        <h2 className="text-base font-semibold">
          {fromLabel} → {toLabel} konvertori
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">{fromLabel} (From)</label>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Masalan: 1"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{toLabel} (To)</label>
            <input
              className="mt-1 w-full rounded-lg border bg-gray-50 px-3 py-2 text-sm"
              placeholder="Natija (V1: keyin chiqadi)"
              disabled
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={reverseHref}
            className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
          >
            Teskari konvertor: {toLabel} → {fromLabel}
          </Link>
        </div>
      </section>

      {/* Formula / Explanation block (SEO template) */}
      <section className="mt-8 space-y-3 rounded-xl border p-4">
        <h2 className="text-base font-semibold">
          {fromLabel}dan {toLabel}ga o‘tkazish formulasi
        </h2>
        <p className="text-sm text-gray-700">
          Bu yerda V1’da qisqa va aniq izoh bo‘ladi (keyingi step’da conversion
          logic’ga bog‘laymiz).
        </p>
        <p className="text-sm text-gray-700">
          Foydalanuvchilar {fromLabel}ni turlicha yozishi mumkin (masalan:{" "}
          {getUnitVariants(from).slice(0, 4).join(", ") || "—"}).
        </p>
      </section>

      {/* Related links (minimal) */}
      <section className="mt-8 rounded-xl border p-4">
        <h2 className="text-base font-semibold">Bog‘liq konvertorlar</h2>
        <div className="mt-3 space-y-2">
          {/* V1: simple related = reverse + first 2 in category */}
          <Link className="block text-sm hover:underline" href={reverseHref}>
            {toLabel} → {fromLabel}
          </Link>

          {config.pairs
            .filter((x) => `${x.from}-${x.to}` !== `${from}-${to}`)
            .slice(0, 2)
            .map((x) => {
              const href = `/${config.slug}/${x.from}-${x.to}`;
              return (
                <Link key={href} className="block text-sm hover:underline" href={href}>
                  {getUnitLabel(x.from)} → {getUnitLabel(x.to)}
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}

