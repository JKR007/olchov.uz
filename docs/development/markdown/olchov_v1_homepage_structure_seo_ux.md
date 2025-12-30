# olchov.uz — V1 Homepage Structure (SEO + UX)

Ushbu hujjat **olchov.uz** loyihasi uchun V1 homepage’ning yakuniy strukturasini belgilaydi.
Maqsad: **SEO (topical authority) + UX (tez topish)** ni balanslash.

---

## 1) Homepage roli (V1)

Homepage = **hub + directory + quick tools**.

### Maqsadlar
- Foydalanuvchi 5 soniyada kerakli konvertorni topsin
- Google kategoriyalarni va muhim sahifalarni tez tushunsin
- Barcha konvertor sahifalar 1 klikda reachable bo‘lsin

---

## 2) Homepage bloklari (tartib bo‘yicha)

### A) Header (minimal)
- Logo → `/`
- “Barcha konvertorlar” (anchor) yoki “Kategoriyalar”

Mobil: murakkab menyu shart emas.

---

### B) Hero (1 ekran)
**H1:**
- `O‘lchov birliklari konvertori (Uzbek)`

**Subtitle:**
- “Uzunlik, og‘irlik, maydon, hajm, harorat… Onlayn, bepul, tez.”

**Global Search:**
- placeholder: `Masalan: dyuym sm, metr fut, sotix gektar`
- natija: konvertor sahifalarga tezkor link

---

### C) “Tez konvertor” (optional, tavsiya)
Mini widget:
- Category select
- From / To select
- Value input
- Live natija

Soddalashtirish varianti:
- Top 3 konvertatsiya uchun quick widget:
  - dyuym ↔ sm
  - kg ↔ funt
  - kvadrat metr ↔ sotix

---

### D) “Mashhur konvertatsiyalar” (Top links)
Homepage authority’ni muhim sahifalarga uzatish uchun.

Misollar:
- `/uzunlik/dyuym-sm`
- `/ogirlik/kg-funt`
- `/maydon/kvadrat-metr-sotix`
- `/harorat/selsiy-farengeyt`
- `/hajm/ml-litr`
- `/uzunlik/km-mil`

Anchor text: tabiiy Uzbek.

---

### E) “Kategoriyalar” (category hub)
Har bir kategoriya card:
- nomi + 1 line izoh
- ichida 3–5 ta top link preview
- “Barchasi” → `/kategoriya`

---

### F) “Barcha konvertorlar” (full directory)
- IA’dagi 17 sahifaning hammasi kategoriya bo‘yicha
- Mobil UX: accordion bo‘lishi mumkin
- SEO: linklar HTML’da SSR ko‘rinishda bo‘lishi shart

---

### G) “Yozilish variantlari” (typo/synonyms paragraph)
Kichik, lekin kuchli SEO blok:

- metr / metir / miter
- santimetr / santimeter / sm
- dyuym / dyum
- selsiy / selsi

---

### H) Footer
- barcha kategoriyalar
- privacy / terms / sitemap / aloqa

---

## 3) Homepage SEO Meta (V1)

**Title:**
- `O‘lchov birliklari konvertori — Uzunlik, og‘irlik, maydon | olchov.uz`

**Description:**
- “Dyuym, santimetr, metr, kg, funt, sotix, gektar va boshqalarni onlayn aylantiring…”

**Canonical:**
- `/`

---

## 4) UX Qoidalari (V1)

- Mobil-first
- Search doim ko‘rinadigan
- Category cards responsive
- Directory accordion
- Accessibility: label, keyboard, focus
- Minimal JS, tez yuklanish

---

## 5) Qat’iy qarorlar (LOCK)

1) Homepage = directory + tools
2) Homepage’dan:
   - barcha kategoriyalar
   - mashhur konvertatsiyalar
   - full directory (17 links)
3) Search konvertor sahifalarni client-side filtr qiladi
4) Typo/synonyms block bo‘ladi
5) Footer trust pages + categories

---

Ushbu hujjat **V1 homepage structure lock** hisoblanadi.
