// src/app/sitemap.xml/route.ts
import { getAllCategoryPages, getAllConverterPages } from "@/config/routes";

export const runtime = "edge"; // Cloudflare Pages uchun mos

function getBaseUrl() {
  // Cloudflare Pages / Vercel da NEXT_PUBLIC_SITE_URL qo'yishni tavsiya qilaman.
  // Masalan: https://olchov.uz
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  return env?.replace(/\/$/, "") || "https://olchov.uz";
}

function isoNow() {
  return new Date().toISOString();
}

export async function GET() {
  const baseUrl = getBaseUrl();
  const now = isoNow();

  const urls = [
    { loc: `${baseUrl}/`, lastmod: now, priority: "1.0" },

    // category pages
    ...getAllCategoryPages().map((p) => ({
      loc: `${baseUrl}${p.path}`,
      lastmod: now,
      priority: "0.7",
    })),

    // converter pages
    ...getAllConverterPages().map((p) => ({
      loc: `${baseUrl}${p.path}`,
      lastmod: now,
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

