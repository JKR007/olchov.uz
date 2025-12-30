# Step H: JSON-LD ni SeoContentBlock bilan sync qilish

Ushbu hujjat **olchov.uz** loyihasida JSON-LD structured data’ni
SEO kontent bilan **100% sinxron** qilish jarayonini tushuntiradi.

Maqsad:
- Sahifadagi FAQ va JSON-LD FAQ **bir xil bo‘lishi**
- Google rich results’da mismatch bo‘lmasligi
- Kontentni **bitta generator** orqali boshqarish

---

## 1. Muammo (Old holat)

Oldingi bosqichlarda:
- FAQ UI → `SeoContentBlock`
- FAQ JSON-LD → qo‘lda yozilgan (`faqItems`)

Bu holatda:
- FAQ matni farq qilishi mumkin
- Google Search Console’da ogohlantirish chiqishi ehtimoli bor

---

## 2. Yechim (Yangi arxitektura)

### Asosiy g‘oya:
👉 **`buildSeoContent()` = yagona manba (single source of truth)**

U:
- sahifada ko‘rinadigan kontentni beradi
- JSON-LD FAQ’ni ham ta’minlaydi

---

## 3. Qanday ishlaydi?

### 3.1 `buildSeoContent()` natijasi

```ts
{
  h2: string;
  intro: string;
  formula: string;
  examples: [];
  faq: Array<{ q: string; a: string }>;
}
```

Shundan:
- UI → `SeoContentBlock`
- JSON-LD → `buildFaqPageJsonLd()`

---

## 4. Converter page refactor

### 4.1 Importlar

```tsx
import { buildSeoContent } from "@/lib/seoContent";
import { buildFaqPageJsonLd, buildWebApplicationJsonLd } from "@/lib/jsonld";
```

---

### 4.2 SEO content’ni bitta joyda yaratish

```tsx
const seo = buildSeoContent({
  category: config.slug,
  from,
  to,
  fromLabel,
  toLabel,
  fromVariants: getUnitVariants(from),
  toVariants: getUnitVariants(to),
});
```

---

### 4.3 WebApplication JSON-LD

```tsx
const webAppJsonLd = buildWebApplicationJsonLd({
  url: canonicalUrl,
  name: `${fromLabel} → ${toLabel} konvertori`,
  description: seo.intro,
  categoryName: config.label,
});
```

---

### 4.4 FAQ JSON-LD (AUTO)

```tsx
const faqJsonLd = buildFaqPageJsonLd(
  seo.faq.map((x) => ({
    question: x.q,
    answer: x.a,
  }))
);
```

🚫 **Endi qo‘lda yozilgan FAQ yo‘q**  
✅ FAQ har doim UI bilan bir xil

---

## 5. Script render qilish

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
/>
```

---

## 6. Natija

- ✅ FAQ UI = FAQ JSON-LD
- ✅ Duplicate / mismatch yo‘q
- ✅ SEO texnik jihatdan toza
- ✅ Kontentni boshqarish oson

---

## 7. Tavsiya (optional)

Canonical URL’ni ham `NEXT_PUBLIC_SITE_URL` orqali boshqarish:

```text
https://olchov.uz/{category}/{from}-{to}
```

---

## Yakun

**Step H** bilan:
- olchov.uz converter sahifalari **Google-friendly**
- SEO + UX to‘liq sinxron
- Keyingi bosqichlar uchun mustahkam asos yaratildi

Keyingi step:
👉 **Step I: Related conversions + breadcrumbs’ni kuchaytirish**
