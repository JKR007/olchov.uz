"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ConversionCategory } from "@/conversions";
import { convertByFactor, cToF, fToC } from "@/lib/convert";
import { roundSmart } from "@/lib/round";
import { FACTORS, isTemperatureCategory } from "@/conversions";

type ConverterClientProps = {
  category: ConversionCategory;
  from: string; // unit slug
  to: string; // unit slug
  fromLabel: string; // display label
  toLabel: string; // display label
  reverseHref: string; // URL for reverse converter
};

/**
 * Parse number input, supporting both comma and dot as decimal separator
 * Uzbek users often use comma (1,5 = 1.5)
 */
function parseNumber(input: string): number | null {
  // Trim and normalize: replace comma with dot
  const normalized = input.trim().replace(",", ".");
  if (!normalized) return null;

  const n = Number(normalized);
  if (!Number.isFinite(n)) return null;

  return n;
}

export default function ConverterClient({
  category,
  from,
  to,
  fromLabel,
  toLabel,
  reverseHref,
}: ConverterClientProps) {
  const [raw, setRaw] = useState<string>("1");
  const [copied, setCopied] = useState(false);

  // Parse input value
  const value = useMemo(() => parseNumber(raw), [raw]);

  // Calculate conversion result
  const result = useMemo(() => {
    if (value === null) return "";

    // Temperature special-case (uses formulas, not factors)
    if (isTemperatureCategory(category)) {
      if (from === "selsiy" && to === "farengeyt") {
        return roundSmart(cToF(value));
      }
      if (from === "farengeyt" && to === "selsiy") {
        return roundSmart(fToC(value));
      }
      return ""; // V1'da faqat shu 2ta pair
    }

    // Factor-based conversion for other categories
    const map = FACTORS[category as Exclude<ConversionCategory, "harorat">];
    const fromFactor = map?.[from];
    const toFactor = map?.[to];

    if (!fromFactor || !toFactor) return "";

    return roundSmart(convertByFactor(value, fromFactor, toFactor));
  }, [category, from, to, value]);

  // Copy result to clipboard
  const handleCopy = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = result;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white">
        {fromLabel} → {toLabel} konvertori
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* From Input */}
        <div>
          <label
            htmlFor="converter-from"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            {fromLabel}
          </label>
          <input
            id="converter-from"
            type="text"
            inputMode="decimal"
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-white/20"
            placeholder="Masalan: 1"
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            aria-label={`${fromLabel} qiymati`}
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Vergul ham bo&apos;ladi: <span className="font-medium">1,5</span>
          </p>
        </div>

        {/* To Result */}
        <div>
          <label
            htmlFor="converter-to"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            {toLabel}
          </label>
          <div className="relative mt-1">
            <input
              id="converter-to"
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 pr-10 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={result}
              readOnly
              placeholder="Natija"
              aria-label={`${toLabel} natijasi`}
            />
            {result && (
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-200"
                aria-label="Natijani nusxalash"
                title="Nusxalash"
              >
                {copied ? (
                  <svg
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={reverseHref}
          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Teskari konvertor: {toLabel} → {fromLabel}
        </Link>
      </div>

      {/* Result Info */}
      {result && (
        <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
          <span>
            Natija: <span className="font-semibold text-gray-900 dark:text-white">{result}</span>{" "}
            {toLabel}
          </span>
        </div>
      )}
    </section>
  );
}

