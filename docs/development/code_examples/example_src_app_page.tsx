// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, getAllConverterPages } from "@/config/routes";

export const metadata: Metadata = {
  title: "O‘lchov birliklari konvertori — Uzunlik, og‘irlik, maydon | olchov.uz",
  description:
    "Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring. Bepul va tez — olchov.uz",
  alternates: { canonical: "/" },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const allPages = getAllConverterPages(); // global directory + search uchun

  // V1: homepage "top links" — keyin config-driven qilamiz, hozir hard-coded:
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
          O‘lchov birliklari konvertori (Uzbek)
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">
          Uzunlik, og‘irlik, maydon, hajm, harorat… Onlayn, bepul, tez.
        </p>

        {/* Global Search (V1 skeleton: keyin client component qilib kuchaytiramiz) */}
        <div className="rounded-xl border p-4">
          <label className="block text-sm font-medium">
            Qidirish (V1)
          </label>
          <p className="mt-1 text-xs text-gray-600">
            Masalan: <span className="font-medium">dyuym sm</span>,{" "}
            <span className="font-medium">metr fut</span>,{" "}
            <span className="font-medium">sotix gektar</span>
          </p>
          <div className="mt-3">
            {/* V1: Search UI placeholder only */}
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Tez orada: qidiruv natijalari shu yerda chiqadi…"
              disabled
            />
          </div>
        </div>
      </section>

      {/* TOP LINKS */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Mashhur konvertatsiyalar</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topLinks.map((href) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border p-4 hover:bg-gray-50"
            >
              <div className="text-sm font-medium">{href}</div>
              <div className="mt-1 text-xs text-gray-600">
                Tez ochish → konvertor sahifasi
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES HUB */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Kategoriyalar</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.values(CATEGORIES).map((cat) => (
            <div key={cat.slug} className="rounded-xl border p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold">{cat.label}</div>
                  <p className="mt-1 text-xs text-gray-600">{cat.description}</p>
                </div>
                <Link
                  href={`/${cat.slug}`}
                  className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
                >
                  Barchasi
                </Link>
              </div>

              <div className="mt-3 space-y-2">
                {cat.pairs.slice(0, 4).map((p) => {
                  const href = `/${cat.slug}/${p.from}-${p.to}`;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-lg px-2 py-2 text-sm hover:bg-gray-50"
                    >
                      {p.from} → {p.to}
                      <span className="ml-2 text-xs text-gray-500">{href}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL DIRECTORY (V1) */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold" id="barcha-konvertorlar">
          Barcha konvertorlar (V1)
        </h2>
        <div className="mt-4 rounded-xl border p-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {allPages.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                className="rounded-lg px-2 py-2 text-sm hover:bg-gray-50"
              >
                <span className="font-medium">{p.path}</span>
                {p.keywords.length > 0 && (
                  <span className="ml-2 text-xs text-gray-500">
                    ({p.keywords.slice(0, 2).join(", ")})
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TYPO / VARIANTS SEO BLOCK */}
      <section className="mt-10 rounded-xl border p-4">
        <h2 className="text-lg font-semibold">Yozilish variantlari</h2>
        <p className="mt-2 text-sm text-gray-700">
          Foydalanuvchilar ayrim birliklarni turlicha yozishi mumkin:{" "}
          <span className="font-medium">metr / metir / miter</span>,{" "}
          <span className="font-medium">santimetr / santimeter / sm</span>,{" "}
          <span className="font-medium">dyuym / dyum</span>,{" "}
          <span className="font-medium">selsiy / selsi</span>. Olchov.uz bularni
          tushunishga moslashtiriladi.
        </p>
      </section>

      <footer className="mt-12 border-t pt-6 text-xs text-gray-600">
        © {new Date().getFullYear()} olchov.uz • Privacy • Terms • Sitemap
      </footer>
    </main>
  );
}

