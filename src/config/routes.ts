/**
 * olchov.uz — V1 routes config (Single Source of Truth)
 *
 * Bu config quyidagilar uchun ishlatiladi:
 * - Routing & static params
 * - SEO metadata generation
 * - Homepage / category directory lists
 * - Internal linking (related conversions)
 * - Sitemap generation
 *
 * V1 scope: ~17 pages (IA locked)
 */

export type CategorySlug = "uzunlik" | "ogirlik" | "harorat" | "maydon" | "hajm";

export type Pair = {
  from: string; // unit slug
  to: string; // unit slug
  /** Optional: sahifa title/meta uchun qo'shimcha sinonim/typo keywordlar */
  keywords?: string[];
  /** Optional: sahifadagi FAQ/izoh bloklari uchun (V1'da minimal) */
  notes?: string[];
};

export type CategoryConfig = {
  slug: CategorySlug;
  label: string; // UI label
  description: string; // category page meta/hero
  pairs: Pair[];
  /** Category-level qidiruv keywordlar (UZ typo'lar) */
  keywords?: string[];
};

export type UnitConfig = {
  slug: string;
  label: string; // UI ko'rinishi (Uzbek Latin)
  symbol?: string; // "cm", "kg", etc.
  /** Uzbek xalq orasidagi yozilish variantlari (SEO content / search help) */
  variants?: string[];
};

/**
 * Units dictionary (V1)
 * Note: slug'lar URL naming conventions hujjatiga mos bo'lishi kerak.
 */
export const UNITS: Record<string, UnitConfig> = {
  // Length
  dyuym: { slug: "dyuym", label: "Dyuym", symbol: "in", variants: ["dyum", "inch", "in"] },
  santimetr: {
    slug: "santimetr",
    label: "Santimetr",
    symbol: "cm",
    variants: ["sm", "santimeter", "cm"],
  },
  millimetr: {
    slug: "millimetr",
    label: "Millimetr",
    symbol: "mm",
    variants: ["millimeter", "mm"],
  },
  metr: { slug: "metr", label: "Metr", symbol: "m", variants: ["metir", "miter", "meter", "m"] },
  fut: { slug: "fut", label: "Fut", symbol: "ft", variants: ["foot", "ft"] },
  kilometr: {
    slug: "kilometr",
    label: "Kilometr",
    symbol: "km",
    variants: ["kilometer", "km"],
  },
  mil: { slug: "mil", label: "Mil", symbol: "mi", variants: ["mile", "mi"] },

  // Weight
  kg: {
    slug: "kg",
    label: "Kilogram",
    symbol: "kg",
    variants: ["kilo", "kilogramm", "kilogram", "kg"],
  },
  funt: { slug: "funt", label: "Funt", symbol: "lb", variants: ["pound", "lbs", "lb"] },
  gramm: { slug: "gramm", label: "Gramm", symbol: "g", variants: ["gram", "gr", "g"] },
  untsiya: { slug: "untsiya", label: "Untsiya", symbol: "oz", variants: ["ounce", "oz"] },
  tonna: { slug: "tonna", label: "Tonna", symbol: "t", variants: ["ton", "t"] },

  // Temperature
  selsiy: {
    slug: "selsiy",
    label: "Selsiy",
    symbol: "°C",
    variants: ["selsi", "celsius", "c"],
  },
  farengeyt: {
    slug: "farengeyt",
    label: "Farengeyt",
    symbol: "°F",
    variants: ["fahrenheit", "f"],
  },

  // Area
  kvadrat_metr: {
    slug: "kvadrat-metr",
    label: "Kvadrat metr",
    symbol: "m²",
    variants: ["kv m", "m2", "m^2", "kvadrat metr", "kvadratmetр"],
  },
  sotix: { slug: "sotix", label: "Sotix", variants: ["sotih", "sотих"] },
  gektar: { slug: "gektar", label: "Gektar", variants: ["gektar", "ha", "hektar"] },

  // Volume
  litr: { slug: "litr", label: "Litr", symbol: "L", variants: ["liter", "l", "L"] },
  gallon: { slug: "gallon", label: "Gallon", variants: ["gal", "gallon"] },
  ml: { slug: "ml", label: "Millilitr", symbol: "mL", variants: ["milliliter", "ml", "mL"] },
  kub_metr: {
    slug: "kub-metr",
    label: "Kub metr",
    symbol: "m³",
    variants: ["m3", "kub metr", "kubmetr"],
  },
};

// Helper: unit mavjudligini tekshirish (dev safety)
export function assertUnitExists(unitSlug: string) {
  if (
    !Object.values(UNITS).some((u) => u.slug === unitSlug || u.slug === unitSlug.replace("_", "-"))
  ) {
    console.warn(`[routes] Unit not found in UNITS: "${unitSlug}"`);
  }
}

/**
 * Categories + pairs (V1 IA locked)
 * Sluglar: /{category}/{from}-{to}
 */
export const CATEGORIES: Record<CategorySlug, CategoryConfig> = {
  uzunlik: {
    slug: "uzunlik",
    label: "Uzunlik",
    description: "Dyuym, santimetr, metr, fut va boshqa uzunlik birliklarini onlayn aylantiring.",
    keywords: ["dyum", "metir", "miter", "sm", "inch", "ft"],
    pairs: [
      {
        from: "dyuym",
        to: "santimetr",
        keywords: ["dyum sm", "inch to cm", "1 dyuym necha sm"],
      },
      {
        from: "santimetr",
        to: "dyuym",
        keywords: ["sm dyuym", "cm to inch", "1 sm necha dyuym"],
      },
      {
        from: "metr",
        to: "fut",
        keywords: ["metir fut", "m to ft", "1 metr necha fut"],
      },
      {
        from: "kilometr",
        to: "mil",
        keywords: ["km mil", "km to mile", "1 km necha mil"],
      },
      {
        from: "millimetr",
        to: "dyuym",
        keywords: ["mm dyuym", "mm to inch", "1 mm necha dyuym"],
      },
    ],
  },

  ogirlik: {
    slug: "ogirlik",
    label: "Og'irlik",
    description: "Kilogram, funt, gramm, untsiya va boshqa og'irlik birliklarini aylantiring.",
    keywords: ["kg", "lbs", "pound", "gram", "oz"],
    pairs: [
      {
        from: "kg",
        to: "funt",
        keywords: ["kg lbs", "kg to lb", "1 kg necha funt"],
      },
      {
        from: "funt",
        to: "kg",
        keywords: ["lbs kg", "lb to kg", "1 funt necha kg"],
      },
      {
        from: "gramm",
        to: "untsiya",
        keywords: ["g oz", "grams to ounces", "1 gramm necha untsiya"],
      },
      {
        from: "tonna",
        to: "kg",
        keywords: ["t kg", "ton to kg", "1 tonna necha kg"],
      },
    ],
  },

  harorat: {
    slug: "harorat",
    label: "Harorat",
    description: "Selsiy va farengeyt o'rtasida haroratni tez aylantiring.",
    keywords: ["selsi", "celsius", "fahrenheit"],
    pairs: [
      {
        from: "selsiy",
        to: "farengeyt",
        keywords: ["c to f", "selsiy farengeyt", "1 selsiy necha farengeyt"],
      },
      {
        from: "farengeyt",
        to: "selsiy",
        keywords: ["f to c", "farengeyt selsiy", "1 farengeyt necha selsiy"],
      },
    ],
  },

  maydon: {
    slug: "maydon",
    label: "Maydon",
    description: "Kvadrat metr, sotix va gektar bo'yicha maydonni hisoblang va aylantiring.",
    keywords: ["kv m", "m2", "sotih", "gektar"],
    pairs: [
      {
        from: "kvadrat-metr",
        to: "sotix",
        keywords: ["m2 sotix", "kvadrat metr sotix", "1 sotix necha m2"],
      },
      {
        from: "sotix",
        to: "gektar",
        keywords: ["sotix gektar", "1 gektar necha sotix"],
      },
      {
        from: "gektar",
        to: "kvadrat-metr",
        keywords: ["gektar m2", "ha m2", "1 gektar necha m2"],
      },
    ],
  },

  hajm: {
    slug: "hajm",
    label: "Hajm",
    description: "Litr, millilitr, kub metr va gallon o'rtasida hajmni aylantiring.",
    keywords: ["liter", "ml", "m3", "gal"],
    pairs: [
      {
        from: "litr",
        to: "gallon",
        keywords: ["litr gallon", "liter to gallon", "1 litr necha gallon"],
      },
      {
        from: "gallon",
        to: "litr",
        keywords: ["gallon litr", "gallon to liter", "1 gallon necha litr"],
      },
      {
        from: "ml",
        to: "litr",
        keywords: ["ml litr", "ml to liter", "1000 ml necha litr"],
      },
      {
        from: "kub-metr",
        to: "litr",
        keywords: ["m3 litr", "kub metr litr", "1 m3 necha litr"],
      },
    ],
  },
} as const;

/**
 * Utility: all converter pages list
 * -> sitemap, global search, homepage directory
 */
export function getAllConverterPages() {
  return (Object.entries(CATEGORIES) as Array<[CategorySlug, CategoryConfig]>).flatMap(
    ([category, cfg]) =>
      cfg.pairs.map((p) => ({
        category,
        from: p.from,
        to: p.to,
        pairSlug: `${p.from}-${p.to}`,
        path: `/${category}/${p.from}-${p.to}`,
        keywords: p.keywords ?? [],
      }))
  );
}

/**
 * Utility: category pages list
 */
export function getAllCategoryPages() {
  return (Object.keys(CATEGORIES) as CategorySlug[]).map((category) => ({
    category,
    path: `/${category}`,
  }));
}

/**
 * Utility: find pair config by params
 * Handles units with hyphens (e.g., "kvadrat-metr", "kub-metr")
 */
export function findPair(category: string, pairSlug: string) {
  const cfg = (CATEGORIES as Record<string, CategoryConfig | undefined>)[category];
  if (!cfg) return null;

  // Try to find exact match first (handles units with hyphens)
  const found = cfg.pairs.find((p) => `${p.from}-${p.to}` === pairSlug);
  if (found) {
    return { category: cfg.slug, config: cfg, pair: found, from: found.from, to: found.to };
  }

  // Fallback: try splitting (for backward compatibility)
  const parts = pairSlug.split("-");
  if (parts.length < 2) return null;

  // Try different split combinations for units with hyphens
  for (let i = 1; i < parts.length; i++) {
    const from = parts.slice(0, i).join("-");
    const to = parts.slice(i).join("-");
    const match = cfg.pairs.find((p) => p.from === from && p.to === to);
    if (match) {
      return { category: cfg.slug, config: cfg, pair: match, from: match.from, to: match.to };
    }
  }

  return null;
}
