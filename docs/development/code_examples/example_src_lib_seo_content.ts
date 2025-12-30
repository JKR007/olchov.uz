// src/lib/seoContent.ts
import { FACTORS, type ConversionCategory } from "@/conversions";
import { cToF, fToC } from "@/lib/convert";
import { roundSmart } from "@/lib/round";

type Args = {
  category: ConversionCategory;
  from: string;
  to: string;
  fromLabel: string;
  toLabel: string;
  fromVariants?: string[];
  toVariants?: string[];
};

function getFactor(category: Exclude<ConversionCategory, "harorat">, unit: string) {
  return FACTORS[category]?.[unit];
}

function convertValue(args: Args, value: number) {
  if (args.category === "harorat") {
    if (args.from === "selsiy" && args.to === "farengeyt") return cToF(value);
    if (args.from === "farengeyt" && args.to === "selsiy") return fToC(value);
    return NaN;
  }

  const mapCat = args.category as Exclude<ConversionCategory, "harorat">;
  const fromF = getFactor(mapCat, args.from);
  const toF = getFactor(mapCat, args.to);
  if (!fromF || !toF) return NaN;

  return (value * fromF) / toF;
}

function formulaText(args: Args) {
  if (args.category === "harorat") {
    if (args.from === "selsiy" && args.to === "farengeyt") return "°F = (°C × 9/5) + 32";
    if (args.from === "farengeyt" && args.to === "selsiy") return "°C = (°F − 32) × 5/9";
    return "Harorat konvertatsiyasi formulasi";
  }

  // factor-based formula
  const mapCat = args.category as Exclude<ConversionCategory, "harorat">;
  const fromF = getFactor(mapCat, args.from);
  const toF = getFactor(mapCat, args.to);

  // koeffitsiyentni ko‘rsatish (yo‘q bo‘lsa fallback)
  if (!fromF || !toF) return `${args.toLabel} = ${args.fromLabel} × (koeffitsiyent)`;
  const k = fromF / toF;

  return `${args.toLabel} = ${args.fromLabel} × ${roundSmart(k)}`;
}

export type SeoContent = {
  h2: string;
  intro: string;
  formulaTitle: string;
  formula: string;
  examplesTitle: string;
  examples: Array<{ input: string; output: string }>;
  faqTitle: string;
  faq: Array<{ q: string; a: string }>;
  variantsLine?: string;
};

export function buildSeoContent(args: Args): SeoContent {
  const h2 = `1 ${args.fromLabel} necha ${args.toLabel}?`;
  const intro = `${args.fromLabel}ni ${args.toLabel}ga tez va aniq aylantirish uchun qiymat kiriting — natija avtomatik hisoblanadi.`;

  const formula = formulaText(args);

  const exampleValues = args.category === "harorat" ? [0, 20, 37, 100] : [1, 5, 10, 100];

  const examples = exampleValues.map((v) => {
    const out = convertValue(args, v);
    return {
      input: `${v} ${args.fromLabel}`,
      output: `${roundSmart(out)} ${args.toLabel}`,
    };
  });

  const fromVars = (args.fromVariants ?? []).slice(0, 4);
  const toVars = (args.toVariants ?? []).slice(0, 4);
  const variantsLine =
    fromVars.length || toVars.length
      ? `Yozilish variantlari: ${[...fromVars, ...toVars].filter(Boolean).join(", ")}`
      : undefined;

  const faq = [
    {
      q: `${args.fromLabel}ni ${args.toLabel}ga qanday o‘tkazaman?`,
      a: `Qiymat kiriting — olchov.uz avtomatik hisoblab beradi. Bu sahifa: ${args.fromLabel} → ${args.toLabel}.`,
    },
    {
      q: `Nega odamlar ${args.fromLabel}ni turlicha yozadi?`,
      a: `Ko‘pchilik qisqartma yoki odatiy variantlarni ishlatadi (masalan: “metir/miter”, “sm”, “dyum”). Biz bu variantlarni qidiruvda hisobga olamiz.`,
    },
    {
      q: `Natijani nechta raqamgacha yaxlitlaysiz?`,
      a: "Natija o‘qishga qulay bo‘lishi uchun “smart rounding” ishlatiladi (katta sonlarda kamroq, kichik sonlarda ko‘proq aniqlik).",
    },
  ];

  return {
    h2,
    intro,
    formulaTitle: "Formula",
    formula,
    examplesTitle: "Misollar",
    examples,
    faqTitle: "Tez-tez so‘raladigan savollar",
    faq,
    variantsLine,
  };
}

