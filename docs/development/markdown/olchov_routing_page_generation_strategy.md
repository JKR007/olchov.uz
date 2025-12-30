# olchov.uz — Routing & Page Generation Strategy  
### (Next.js App Router)

Ushbu hujjat **olchov.uz** loyihasi uchun sahifalarni  
**Next.js App Router + Static Generation** orqali yaratish strategiyasini belgilaydi.

Bu strategiya:
- SEO-friendly
- arzon (backend yo‘q)
- Cloudflare Pages’ga mos
- 17 sahifadan 200+ sahifagacha oson kengayadi

---

## 1) URL va Route Strukturasi (LOCK)

### Asosiy URL formatlari

- Homepage  
  ```
  /
  ```

- Category sahifa  
  ```
  /{kategoriya}
  ```
  Misol:
  - `/uzunlik`
  - `/ogirlik`

- Converter sahifa  
  ```
  /{kategoriya}/{from}-{to}
  ```
  Misol:
  - `/uzunlik/dyuym-santimetr`
  - `/maydon/kvadrat-metr-sotix`

---

## 2) App Router Papka Tuzilishi

```
src/app/
├── page.tsx                  # Homepage
├── [category]/
│   ├── page.tsx              # Category page
│   └── [pair]/
│       └── page.tsx          # Converter page
├── sitemap.xml/
│   └── route.ts              # Sitemap generator
└── robots.txt/
    └── route.ts              # Robots file
```

---

## 3) Single Source of Truth — routes config

Barcha sahifalar **bitta config fayl** asosida yaratiladi.

```
src/config/routes.ts
```

### Misol struktura

```ts
export const CATEGORIES = {
  uzunlik: {
    label: "Uzunlik",
    pairs: [
      { from: "dyuym", to: "santimetr" },
      { from: "santimetr", to: "dyuym" },
      { from: "metr", to: "fut" },
      { from: "kilometr", to: "mil" },
      { from: "millimetr", to: "dyuym" },
    ],
  },
  ogirlik: {
    label: "Og‘irlik",
    pairs: [
      { from: "kg", to: "funt" },
      { from: "funt", to: "kg" },
      { from: "gramm", to: "untsiya" },
      { from: "tonna", to: "kg" },
    ],
  },
} as const;
```

Bu config:
- routing
- SEO metadata
- internal linking
- sitemap  
uchun ishlatiladi.

---

## 4) Static Generation — generateStaticParams

### Converter sahifalar uchun

```ts
export function generateStaticParams() {
  return Object.entries(CATEGORIES).flatMap(([category, data]) =>
    data.pairs.map(p => ({
      category,
      pair: `${p.from}-${p.to}`,
    }))
  );
}
```

Natija:
- barcha sahifalar build vaqtida tayyor
- Cloudflare Pages’da juda tez
- SEO uchun ideal

---

## 5) Validation & 404 Control

Converter sahifada tekshiriladi:
- kategoriya config’da bormi?
- pair (from–to) mavjudmi?

Agar mavjud bo‘lmasa:
```ts
notFound();
```

Bu:
- noto‘g‘ri URL’larning index bo‘lishini oldini oladi
- SEO sifatini oshiradi

---

## 6) Metadata Generation (SEO automation)

Har bir converter sahifada:

```ts
export async function generateMetadata({ params }) {
  // category, from, to → routes config’dan olinadi
  // SEO Page Template asosida:
  // title, description, canonical yaratiladi
}
```

Foyda:
- har sahifa unique title/description
- typo va sinonimlar meta’da ishlatiladi
- qo‘lda yozish shart emas

---

## 7) Related Conversions (Internal Linking)

Converter sahifada avtomatik:
- reverse pair (sm → dyuym)
- shu kategoriyadagi mashhur juftliklar
- 3–6 ta related link

Manba: `routes.ts` config.

---

## 8) Sitemap Generation

`/sitemap.xml` route handler:

- barcha category sahifalar
- barcha converter sahifalar

Config’dan avtomatik olinadi.

Bu:
- indexing tezligini oshiradi
- Google Search Console’da muammo bo‘lmaydi

---

## 9) Nega bu strategiya to‘g‘ri?

- ❌ backend yo‘q → xarajat yo‘q
- ✅ static pages → tezlik
- ✅ config-driven → xatolar kam
- ✅ SEO-friendly → authority growth
- ✅ future-proof → V2/V3 ready

---

## Yakun

Ushbu hujjat **Routing & Page Generation Strategy (V1)** uchun  
**qat’iy va o‘zgarmas asos** hisoblanadi.

Keyingi amaliy bosqich:
- `routes.ts` ni to‘liq yozish
- sahifa skeleton’larini yaratish
