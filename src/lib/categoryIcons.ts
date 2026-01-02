import type { CategorySlug } from "@/config/routes";

/**
 * Get emoji icon for category
 */
export function getCategoryIcon(category: CategorySlug): string {
  const icons: Record<CategorySlug, string> = {
    uzunlik: "📏",
    ogirlik: "⚖️",
    harorat: "🌡️",
    maydon: "📐",
    hajm: "📦",
  };
  return icons[category] || "📊";
}

