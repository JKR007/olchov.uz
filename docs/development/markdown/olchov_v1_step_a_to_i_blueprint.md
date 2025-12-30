# olchov.uz — Step A dan Step I gacha (V1 Full Blueprint)

Ushbu hujjat **olchov.uz** loyihasining V1 bosqichi uchun
**Step A → Step I** oralig‘idagi barcha muhim texnik va SEO qarorlarni
yagona joyda jamlaydi.

Bu hujjat:
- kelajakda kontekstni yo‘qotmaslik
- qayta ko‘rib chiqish
- jamoaga tushuntirish
uchun mo‘ljallangan.

---

## Step A — routes.ts (Single Source of Truth)

**Maqsad:**
- barcha sahifalar bitta config’dan boshqariladi

**Asosiy vazifalar:**
- kategoriyalar (uzunlik, og‘irlik, maydon, hajm, harorat)
- conversion pair’lar
- unit label’lar
- Uzbek typo / variantlar (metir, miter, sm, dyum…)

**Natija:**
- routing
- SEO
- sitemap
- search
hammasi bitta joydan boshqariladi

---

## Step B — Page Skeletons (UI foundation)

**Sahifalar:**
- Homepage
- Category page
- Converter page

**Prinsiplar:**
- mobile-first
- minimal UI
- Tailwind CSS
- SEO-friendly HTML structure

---

## Step C — ConverterClient (Live conversion)

**Xususiyatlar:**
- frontend-only (backend yo‘q)
- factor-based conversion
- temperature uchun maxsus formula
- smart rounding
- vergul/nuqta input qo‘llab-quvvatlash

**Foyda:**
- tez
- arzon
- Cloudflare Pages uchun ideal

---

## Step D — Homepage Global Search

**Qidiruv qamrovi:**
- URL slug
- unit label
- unit variant (typo)
- keywords

**Xususiyatlar:**
- metir / miter / metr
- dyum / dyuym
- sm / cm
- tezkor natija

---

## Step E — Sitemap + Robots

**Fayllar:**
- `/sitemap.xml`
- `/robots.txt`

**Xususiyatlar:**
- dynamic generation
- routes.ts’dan avtomatik
- Cloudflare Pages mos

---

## Step F — JSON-LD (Structured Data)

**Turlar:**
- WebApplication
- FAQPage

**Maqsad:**
- Google’ga sahifa “converter tool” ekanini tushuntirish
- rich results imkoniyati

---

## Step G — SEO Content Generator

**Kontent:**
- formula
- misollar (1, 5, 10, 100)
- FAQ
- variant yozilishlar

**Afzallik:**
- har sahifa “thin content” emas
- real foydali sahifa

---

## Step H — JSON-LD ↔ SEO Content Sync

**Asosiy g‘oya:**
- `buildSeoContent()` = yagona manba

**Natija:**
- UI FAQ = JSON-LD FAQ
- mismatch yo‘q
- Search Console’da xatolar bo‘lmaydi

---

## Step I — Related Conversions + Breadcrumbs

**Internal linking:**
- Breadcrumb (Home → Category → Converter)
- Related conversions (reverse + sibling)
- Category hub link

**SEO foyda:**
- crawl depth ↓
- topical authority ↑
- UX yaxshilanishi

---

## Yakuniy holat (V1)

olchov.uz hozir:
- SEO-first
- frontend-only
- arzon hosting
- scalable architecture
- monetizatsiyaga tayyor

---

## Keyingi bosqichlar (V2 yo‘li)

- Step J: Performance & polish
- Ads & monetization
- PWA / Mobile app
- Additional converters

---

**Status:** ✅ V1 Blueprint COMPLETE
