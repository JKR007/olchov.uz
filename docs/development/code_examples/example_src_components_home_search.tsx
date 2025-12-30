// src/components/HomeSearch.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { searchConverters, type SearchResult } from "@/lib/search";

export default function HomeSearch() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchConverters(q, 12), [q]);

  // ESC to clear
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQ("");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="rounded-xl border p-4">
      <label className="block text-sm font-medium">Qidirish</label>
      <p className="mt-1 text-xs text-gray-600">
        Masalan: <span className="font-medium">dyuym sm</span>,{" "}
        <span className="font-medium">metir fut</span>,{" "}
        <span className="font-medium">sotix gektar</span>,{" "}
        <span className="font-medium">selsiy farengeyt</span>
      </p>

      <div className="mt-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
          placeholder="Qidirish… (dyuym, sm, kg, sotix, metir...)"
        />
      </div>

      <div className="mt-3">
        {q.trim().length < 2 ? (
          <p className="text-xs text-gray-500">
            Kamida 2 ta belgi yozing. (ESC — tozalash)
          </p>
        ) : results.length === 0 ? (
          <p className="text-xs text-gray-500">
            Hech narsa topilmadi. Boshqa yozilish variantini sinab ko‘ring.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {results.map((r: SearchResult) => (
              <Link
                key={r.path}
                href={r.path}
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              >
                <div className="font-medium">{r.label}</div>
                <div className="mt-1 text-xs text-gray-600">
                  {r.path} • {r.category}
                </div>
                {r.keywords?.length ? (
                  <div className="mt-1 text-[11px] text-gray-500">
                    {r.keywords.slice(0, 3).join(" • ")}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

