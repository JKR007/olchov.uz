// Eslatma: V1 config’da UNITS bor, lekin u SEO/UI uchun. Konvertatsiya uchun bizga “factor” kerak.
// Shuning uchun V1’da alohida factor map qilamiz (keyin V2’da birlashtiramiz).
// src/conversions/index.ts
export type ConversionCategory = "uzunlik" | "ogirlik" | "maydon" | "hajm" | "harorat";

export const FACTORS: Record<
  Exclude<ConversionCategory, "harorat">,
  Record<string, number>
> = {
  // base: metr
  uzunlik: {
    metr: 1,
    santimetr: 0.01,
    millimetr: 0.001,
    dyuym: 0.0254,
    fut: 0.3048,
    kilometr: 1000,
    mil: 1609.344,
  },

  // base: kilogram
  ogirlik: {
    kg: 1,
    gramm: 0.001,
    tonna: 1000,
    funt: 0.45359237,
    untsiya: 0.028349523125,
  },

  // base: kvadrat metr
  maydon: {
    "kvadrat-metr": 1,
    sotix: 100, // 1 sotix = 100 m²
    gektar: 10000, // 1 ha = 10000 m²
  },

  // base: litr
  hajm: {
    litr: 1,
    ml: 0.001,
    "kub-metr": 1000, // 1 m³ = 1000 L
    gallon: 3.785411784, // US gallon
  },
};

export function isTemperatureCategory(category: ConversionCategory) {
  return category === "harorat";
}

