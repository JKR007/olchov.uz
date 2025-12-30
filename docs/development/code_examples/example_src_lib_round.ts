// src/lib/round.ts
export function roundSmart(value: number) {
  if (!Number.isFinite(value)) return "";

  const abs = Math.abs(value);
  if (abs === 0) return "0";

  // Katta sonlarda 4 xona, kichiklarda 6 xona
  const digits = abs >= 1 ? 4 : 6;
  const rounded = Number(value.toFixed(digits));

  // "1.0000" kabi ko‘rinishni tozalash
  return String(rounded);
}

