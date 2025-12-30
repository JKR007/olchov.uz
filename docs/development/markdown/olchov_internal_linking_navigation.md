# olchov.uz — Internal Linking & Navigation Structure (Saqlash uchun)

Ushbu hujjat **olchov.uz** loyihasida ichki havolalar (internal linking) va navigatsiya tuzilmasi bo‘yicha
**qat’iy va o‘zgartirilmas arxitektura qarorlarini** belgilaydi.

Bu struktura:
- SEO barqarorligi
- Google’da topical authority
- Foydalanuvchi qulayligi

uchun asos bo‘lib xizmat qiladi.

---

## 1. Asosiy konsepsiya (mental model)

olchov.uz — bu **SPA emas**, balki **bilim va vositalar kutubxonasi**.

Google va foydalanuvchi uchun:
- aniq ierarxiya
- mavzular o‘rtasidagi mantiqiy bog‘liqlik
- tez topiladigan foydali sahifalar

asosiy ustuvorlik hisoblanadi.

---

## 2. Sahifa turlari (qat’iy belgilangan)

### 2.1 Bosh sahifa `/`

**Roli**:
- Markaziy hub
- Eng yuqori authority sahifa
- Foydalanuvchi uchun kirish nuqtasi

---

### 2.2 Kategoriya sahifalari

Misollar:
- `/uzunlik`
- `/ogirlik`
- `/maydon`

**Roli**:
- Bir xil mavzudagi konvertorlarni guruhlash
- Topical authority yaratish

---

### 2.3 Konvertor sahifalari (asosiy sahifalar)

Misollar:
- `/uzunlik/dyuym-santimetr`
- `/maydon/kvadrat-metr-sotix`

**Roli**:
- Aniq qidiruv intentini qondirish
- Asosiy trafik va SEO qiymatini olish

---

### 2.4 Xizmat sahifalari

- `/maxfiylik-siyosati`
- `/foydalanish-shartlari`
- `/aloqa`
- `/sitemap`

**Roli**:
- Ishonch
- Huquqiy moslik
- Texnik to‘liqlik

---

## 3. Bosh sahifa linking strategiyasi

Bosh sahifa **hamma muhim sahifalarga havola berishi shart**.

### 3.1 Kategoriya havolalari
Bosh sahifada quyidagi kategoriya linklari mavjud bo‘ladi:

- Uzunlik
- Og‘irlik
- Maydon
- Hajm
- Harorat
- Tezlik
- Quvvat

---

### 3.2 “Mashhur konvertatsiyalar” bloki

Bu blok SEO va UX uchun eng muhim bloklardan biri.

Misollar:
- dyuym → santimetr
- kilogramm → funt
- kvadrat metr → sotix
- km/soat → mil/soat

Bu havolalar:
- authority uzatadi
- foydalanuvchini tez maqsadga olib boradi

---

### 3.3 “Barcha konvertorlar” katalogi

- Kategoriyalar bo‘yicha guruhlangan
- Mobil uchun collapsible bo‘lishi mumkin
- HTML’da barcha linklar mavjud bo‘lishi shart

---

## 4. Kategoriya sahifalari linking strategiyasi

Kategoriya sahifasi:
- O‘z ichidagi **barcha konvertor sahifalariga** havola beradi
- Bosh sahifaga qaytish linkiga ega bo‘ladi

Kategoriya sahifasiga havolalar:
- Bosh sahifadan
- O‘sha kategoriya konvertor sahifalaridan beriladi

---

## 5. Konvertor sahifalari linking strategiyasi (eng muhim qism)

Har bir konvertor sahifasi quyidagilarga havola berishi shart:

### 5.1 Kategoriya havolasi
Breadcrumb yoki matn ko‘rinishida:

```
Bosh sahifa > Uzunlik > Dyuym → Santimetr
```

---

### 5.2 Bog‘liq konvertorlar

Har bir sahifada 3–6 ta bog‘liq konvertor linklari bo‘ladi.

Misol:
- santimetr → dyuym
- millimetr → dyuym
- metr → fut
- dyuym → millimetr

---

### 5.3 Bosh sahifaga qaytish
Footer yoki breadcrumb orqali.

---

## 6. Breadcrumbs

Breadcrumblar:
- ierarxiyani aniq ko‘rsatadi
- UX va SEO’ni yaxshilaydi
- oddiy HTML ko‘rinishida bo‘ladi

---

## 7. Navigatsiya komponentlari

### Header
- Logo → `/`
- Minimal menyu (v1 da murakkab navigatsiya yo‘q)

---

### Footer
Footer’da quyidagi havolalar bo‘ladi:
- Bosh sahifa
- Barcha kategoriya sahifalari
- Maxfiylik siyosati
- Foydalanish shartlari
- Sitemap

---

## 8. Ichki linking qoidalari (qat’iy)

### Man etiladi:
- Internal `nofollow`
- JS-only havolalar
- Orphan sahifalar
- Haddan tashqari ko‘p linklar
- Noaniq anchor text

---

### Majburiy:
- Mantiqiy va tabiiy anchor text
- Barqaror pattern
- Kontekstual bog‘lanish

---

## 9. Anchor text strategiyasi

Foydalaniladi:
- “dyuymni santimetrga o‘girish”
- “uzunlik birliklari”
- “maydon konvertorlari”

Foydalanilmaydi:
- sun’iy SEO so‘zlari
- inglizcha marketing iboralari

---

## 10. Yakuniy link oqimi (summary)

```
Bosh sahifa
 ├─ Kategoriya sahifalari
 │   ├─ Konvertor sahifalari
 │   │   ├─ Bog‘liq konvertorlar
 │   │   └─ Kategoriya sahifasi
 │   └─ Bosh sahifa
 └─ Mashhur konvertatsiyalar
```

---

## 11. Qat’iy tasdiqlangan qarorlar

- Bosh sahifa barcha kategoriyalarga link beradi
- Kategoriya sahifalari barcha konvertorlarga link beradi
- Konvertor sahifalari:
  - kategoriya sahifasiga
  - 3–6 bog‘liq konvertorga link beradi
- Breadcrumb ishlatiladi
- Orphan sahifalar bo‘lmaydi

---

**Ushbu hujjat ichki linking va navigatsiya bo‘yicha yagona asos (baseline) hisoblanadi va o‘zgartirilmaydi.**
