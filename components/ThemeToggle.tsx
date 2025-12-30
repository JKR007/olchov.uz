"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    // Sync with what was set by the blocking script
    const currentClass = document.documentElement.classList.contains("dark") ? "dark" : "light";
    if (currentClass !== initialTheme) {
      applyTheme(initialTheme);
    }
  }, []);

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

