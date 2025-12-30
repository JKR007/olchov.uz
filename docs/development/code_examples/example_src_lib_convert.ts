// src/lib/convert.ts
export function convertByFactor(value: number, fromFactor: number, toFactor: number) {
  return (value * fromFactor) / toFactor;
}

// Temperature (special-case)
export function cToF(c: number) {
  return (c * 9) / 5 + 32;
}
export function fToC(f: number) {
  return ((f - 32) * 5) / 9;
}

