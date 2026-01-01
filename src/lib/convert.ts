/**
 * Conversion functions for unit conversions
 * All calculations are frontend-only, no backend required
 */

/**
 * Convert value using base unit factors
 * Formula: result = (value * fromFactor) / toFactor
 */
export function convertByFactor(value: number, fromFactor: number, toFactor: number) {
  return (value * fromFactor) / toFactor;
}

/**
 * Convert Celsius to Fahrenheit
 * Formula: °F = (°C × 9/5) + 32
 */
export function cToF(c: number) {
  return (c * 9) / 5 + 32;
}

/**
 * Convert Fahrenheit to Celsius
 * Formula: °C = (°F − 32) × 5/9
 */
export function fToC(f: number) {
  return ((f - 32) * 5) / 9;
}

