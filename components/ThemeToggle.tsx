"use client";

import { useEffect, useState, useRef } from "react";

// Helper function to get initial theme (can be called during render)
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  // Read from DOM (set by blocking script)
  const hasDarkClass = document.documentElement.classList.contains("dark");
  if (hasDarkClass) return "dark";

  // Fallback to localStorage or system preference
  const stored = localStorage.getItem("theme") as "light" | "dark" | null;
  if (stored) return stored;

  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemPrefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  // Initialize theme from DOM/localStorage (blocking script sets it first)
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);
  const hasInitialized = useRef(false);

  // Apply theme to document
  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    // Remove both classes first to ensure clean state
    root.classList.remove("dark", "light");
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
  };

  // Initialize on mount (only once)
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Set mounted flag asynchronously to avoid synchronous setState
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 0);

    // Sync theme with DOM (in case blocking script and state differ)
    const currentClass = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const currentTheme = theme;
    if (currentClass !== currentTheme) {
      applyTheme(currentTheme);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps - only run once on mount

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
        disabled
      >
        <span className="inline-block h-4 w-4">🌓</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Current: ${theme === "light" ? "Light" : "Dark"} mode`}
    >
      {theme === "light" ? (
        <span className="inline-block h-4 w-4" aria-hidden="true">
          🌙
        </span>
      ) : (
        <span className="inline-block h-4 w-4" aria-hidden="true">
          ☀️
        </span>
      )}
    </button>
  );
}
