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