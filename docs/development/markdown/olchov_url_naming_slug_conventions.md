# olchov.uz — URL Naming & Slug Conventions (Saqlash uchun)

Ushbu hujjat **olchov.uz** loyihasi uchun URL tuzilmasi va slug (yo‘l nomlari) bo‘yicha **qat’iy qoidalarni** belgilaydi.  
Bu qoidalar SEO barqarorligi va uzoq muddatli o‘sish uchun **o‘zgartirilmas** deb qabul qilinadi.

---

## 1. Asosiy maqsad

URL’lar:
- Foydalanuvchi uchun tushunarli bo‘lishi
- Google uchun aniq **intent** ifodalashi
- Bir xil mantiqqa qat’iy rioya qilishi
- Hech qachon keyinchalik o‘zgartirilmasligi kerak

---

## 2. Umumiy URL tuzilmasi

Har bir konvertor sahifasi quyidagi formatda bo‘ladi:

```
/{kategoriya}/{from}-{to}
```

Misol:
```
/uzunlik/dyuym-santimetr
```

Bu sahifa:
- **asosiy yo‘nalish** (dyuym → santimetr) uchun canonical hisoblanadi
- sahifa ichida **almashtirish (swap)** orqali teskari konvertatsiyani ham bajaradi

---

## 3. Kategoriyalar (qat’iy belgilangan)

V1 uchun kategoriya slug’lari:

- `uzunlik`
- `ogirlik`
- `maydon`
- `hajm`
- `harorat`
- `tezlik`
- `quvvat`

⚠️ Qoidalar:
- Faqat **ASCII**
- Kichik harflar
- Diakritik belgilarsiz (`og‘irlik` → `ogirlik`)

---

## 4. Birlik nomlarini URL’da yozish qoidalari

### Asosiy qoida:
URL’da **odamlar qanday yozsa, shunday yoziladi**, qisqartmalar emas.

### To‘g‘ri (foydalaniladi):
- dyuym
- santimetr
- metr
- fut
- yard
- kilometr
- mil
- kilogramm
- funt
- gramm
- untsiya
- sotix
- gektar
- litr
- gallon
- selsiy
- farengeyt
- ot-kuchi
- kilovatt

### Noto‘g‘ri (URL’da ishlatilmaydi):
- cm, mm, kg, lb, hp, kW
- inglizcha nomlar (agar o‘zbekcha keng ishlatilsa)
- belgilar va formulalar

⚠️ Qisqartmalar **faqat UI’da** ko‘rsatiladi, URL’da emas.

---

## 5. Conversion pair tartibi (canonical)

URL har doim **asosiy yo‘nalishni** bildiradi.

Misol:
```
/uzunlik/dyuym-santimetr
```

- Sahifa nomi: *Dyuymni santimetrga o‘girish*
- Reverse yo‘nalish (`santimetr → dyuym`) uchun alohida URL yaratilmaydi
- Duplicate sahifalar yo‘q

---

## 6. Tire (hyphen) va yozish qoidalari

- So‘zlar orasida faqat `-` (hyphen) ishlatiladi
- `_` (underscore), bo‘sh joy, camelCase qat’iyan taqiqlanadi

To‘g‘ri:
- `kvadrat-metr-sotix`
- `km-soat-mil-soat`

Noto‘g‘ri:
- `kvadrat_metr_sotix`
- `KvadratMetrSotix`
- `kvadrat metr sotix`

---

## 7. Murakkab birliklarni soddalashtirish

| Birlik | URL ko‘rinishi |
|------|---------------|
| kvadrat metr | `kvadrat-metr` |
| kub metr | `kub-metr` |
| km/soat | `km-soat` |
| mil/soat | `mil-soat` |

Matematik belgilardan (`m2`, `m3`) URL’da foydalanilmaydi.

---

## 8. V1 uchun canonical URL misollari

### Uzunlik
- `/uzunlik/dyuym-santimetr`
- `/uzunlik/millimetr-dyuym`
- `/uzunlik/kilometr-mil`

### Og‘irlik
- `/ogirlik/kilogramm-funt`
- `/ogirlik/gramm-untsiya`

### Maydon
- `/maydon/kvadrat-metr-sotix`
- `/maydon/sotix-gektar`
- `/maydon/kvadrat-metr-gektar`

### Hajm
- `/hajm/litr-kub-metr`
- `/hajm/millilitr-litr`
- `/hajm/gallon-litr`

### Harorat
- `/harorat/selsiy-farengeyt`

### Tezlik
- `/tezlik/km-soat-mil-soat`

### Quvvat
- `/quvvat/ot-kuchi-kilovatt`

---

## 9. Qat’iyan man etiladi

- URL’larni keyinchalik o‘zgartirish
- Birlik nomlarini aralashtirib yozish
- Bir xil konvertatsiya uchun bir nechta URL
- Query parametrlarga asoslangan routing
- Bitta umumiy SPA URL

---

## 10. Qat’iy tasdiqlangan qarorlar

- ASCII-only slug’lar
- Uzbek (lotin) terminlar
- `/kategoriya/from-to` modeli
- Har bir juftlik uchun bitta canonical sahifa
- Reverse konvertatsiya sahifa ichida bajariladi

---

**Ushbu hujjat o‘zgartirilmas asos (baseline) sifatida qabul qilinadi.**
