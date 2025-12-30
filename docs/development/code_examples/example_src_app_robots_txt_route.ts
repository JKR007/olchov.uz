// src/app/robots.txt/route.ts
export const runtime = "edge";

function getBaseUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  return env?.replace(/\/$/, "") || "https://olchov.uz";
}

export async function GET() {
  const baseUrl = getBaseUrl();

  const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

