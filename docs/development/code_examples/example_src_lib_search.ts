// src/lib/search.ts
import { CATEGORIES, getAllConverterPages, UNITS } from "@/config/routes";

function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['‘’`"]/g, "")
    .replace(/\s+/g, " ")
    .replace(/_/g, "-");
}

function unitVariants(slug: string): string[] {
  const u = Object.values(UNITS).find((x) => x.slug === slug);
  return [
    slug,
    u?.label ?? "",
    u?.symbol ?? "",
    ...(u?.variants ?? []),
  ].filter(Boolean);
}

export type SearchResult = {
  path: string;
  label: string; // "Dyuym → Santimetr"
  category: string;
  keywords: string[];
  score: number;
};

export function searchConverters(queryRaw: string, limit = 12): SearchResult[] {
  const q = normalize(queryRaw);
  if (!q || q.length < 2) return [];

  const pages = getAllConverterPages();

  const results: SearchResult[] = pages.map((p) => {
    const catCfg = (CATEGORIES as any)[p.category];
    const fromVars = unitVariants(p.from).map(normalize);
    const toVars = unitVariants(p.to).map(normalize);

    const kw = [
      p.path,
      p.pairSlug,
      ...(p.keywords ?? []),
      ...fromVars,
      ...toVars,
      catCfg?.label ?? "",
      catCfg?.slug ?? "",
    ]
      .filter(Boolean)
      .map(normalize);

    // scoring
    let score = 0;

    // Exact path match bonus
    if (kw.includes(q)) score += 50;

    // Direct substring matches
    for (const token of kw) {
      if (!token) continue;
      if (token === q) score += 40;
      else if (token.startsWith(q)) score += 18;
      else if (token.includes(q)) score += 8;
    }

    // Bonus if query contains both "from" and "to" hints
    const qParts = q.split(" ").filter(Boolean);
    const fromHit = qParts.some((t) => fromVars.some((v) => v.includes(t)));
    const toHit = qParts.some((t) => toVars.some((v) => v.includes(t)));
    if (fromHit) score += 10;
    if (toHit) score += 10;
    if (fromHit && toHit) score += 12;

    const label = `${p.from} → ${p.to}`;

    return {
      path: p.path,
      label,
      category: p.category,
      keywords: (p.keywords ?? []).slice(0, 6),
      score,
    };
  });

  return results
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

