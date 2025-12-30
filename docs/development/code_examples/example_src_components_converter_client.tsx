// src/components/ConverterClient.tsx
"use client";

import { useMemo, useState } from "react";
import { roundSmart } from "@/lib/round";
import { convertByFactor, cToF, fToC } from "@/lib/convert";
import { FACTORS, type ConversionCategory } from "@/conversions";

type Props = {
  category: ConversionCategory;
  from: string;
  to: string;
  fromLabel: string;
  toLabel: string;
};

function parseNumber(input: string): number | null {
  // Uzbek userlar ba'zan "," ishlatadi — UX uchun qabul qilamiz
  const normalized = input.trim().replace(",", ".");
  if (!normalized) return null;

  const n = Number(normalized);
  if (!Number.isFinite(n)) return null;

  return n;
}

export default function ConverterClient({ category, from, to, fromLabel, toLabel }: Props) {
  const [raw, setRaw] = useState<string>("1");

  const value = useMemo(() => parseNumber(raw), [raw]);

  const result = useMemo(() => {
    if (value === null) return "";

    // Temperature special-case
    if (category === "harorat") {
      if (from === "selsiy" && to === "farengeyt") return roundSmart(cToF(value));
      if (from === "farengeyt" && to === "selsiy") return roundSmart(fToC(value));
      return ""; // V1’da faqat shu 2ta
    }

    const map = FACTORS[category as Exclude<ConversionCategory, "harorat">];
    const fromFactor = map?.[from];
    const toFactor = map?.[to];

    if (!fromFactor || !toFactor) return "";

    return roundSmart(convertByFactor(value, fromFactor, toFactor));
  }, [category, from, to, value]);

  return (
    <section className="mt-8 rounded-xl border p-4">
      <h2 className="text-base font-semibold">
        {fromLabel} → {toLabel} konvertori
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">{fromLabel} (From)</label>
          <input
            inputMode="decimal"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Masalan: 1"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
          />
          <p className="mt-1 text-xs text-gray-500">
            Vergul ham bo‘ladi: <span className="font-medium">1,5</span>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium">{toLabel} (To)</label>
          <input
            className="mt-1 w-full rounded-lg border bg-gray-50 px-3 py-2 text-sm"
            value={result}
            readOnly
            placeholder="Natija"
          />
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-600">
        {result ? (
          <span>
            Natija: <span className="font-semibold">{result}</span> {toLabel}
          </span>
        ) : (
          <span>Qiymat kiriting — natija shu yerda chiqadi.</span>
        )}
      </div>
    </section>
  );
}

