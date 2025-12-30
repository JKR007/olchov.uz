olchov.uz — V1 Konvertorlar Rejasi (Saqlash uchun)

Ushbu hujjat **olchov.uz** loyihasining V1 (birinchi versiya) uchun qabul qilingan **mahsulot, UX va texnik qarorlarni** rasmiy tarzda hujjatlashtiradi.  
Hujjat keyinchalik loyihani davom ettirishda **asosiy kontekst** sifatida ishlatiladi.

---

## 1. Asosiy qarorlar (V1)

- **Loyiha turi**: O‘lchov birliklarini konvertatsiya qiluvchi veb-sayt
- **Domain**: olchov.uz
- **Til**: Uzbek (lotin alifbosi)
- **Frontend stack**:
  - Next.js
  - TypeScript
  - Tailwind CSS
- **Backend**: yo‘q (static-first, barcha hisob-kitoblar frontendda)
- **Hosting**: Cloudflare Pages
- **SEO modeli**: Static sahifalar (SSG)
- **Routing strategiyasi**:
  - Har bir konvertatsiya jufti uchun **alohida sahifa**
  - Misol: `/uzunlik/dyuym-sm`

---

## 2. V1 dizayn falsafasi

V1 quyidagi tamoyillarga asoslanadi:

- O‘zbekistonda **real ishlatiladigan birliklar**
- Qurilish, kundalik hayot, texnika va o‘qish ehtiyojlari
- Kam raqobatli va aniq foydali konvertorlar
- Mobil-first va maksimal soddalik
- Ortiqcha murakkabliksiz, kengayishga tayyor arxitektura

V1 **global ilmiy**, **kam ishlatiladigan** yoki **backend talab qiladigan** (masalan, valyuta) konvertorlarni o‘z ichiga olmaydi.

---

## 3. Routing modeli (muhim)

V1 da **har bir konvertatsiya jufti uchun bitta sahifa** yaratiladi.

Misollar:
- `/uzunlik/dyuym-sm`
- `/maydon/sotix-m2`
- `/ogirlik/kg-funt`

Bitta sahifa ichida:
- Almashtirish (swap) orqali ikki tomonga konvertatsiya
- SEO uchun bitta asosiy yo‘nalish (H1, title)

---

## 4. V1 Kategoriyalar va Konvertorlar ro‘yxati

### 4.1 Uzunlik (Length)

1. dyuym ↔ santimetr  
2. santimetr ↔ dyuym  
3. metr ↔ fut  
4. metr ↔ yard  
5. kilometr ↔ mil  
6. millimetr ↔ dyuym  

---

### 4.2 Og‘irlik (Weight / Mass)

7. kilogramm ↔ funt  
8. gramm ↔ untsiya  
9. tonna ↔ kilogramm  
10. kilogramm ↔ gramm  

---

### 4.3 Maydon (Area) — O‘zbekiston uchun juda muhim

11. kvadrat metr ↔ sotix  
12. sotix ↔ gektar  
13. kvadrat metr ↔ gektar  
14. akr ↔ kvadrat metr  

---

### 4.4 Hajm (Volume)

15. litr ↔ kub metr  
16. millilitr ↔ litr  
17. gallon ↔ litr  

---

### 4.5 Harorat (Temperature)

18. selsiy ↔ farengeyt  
19. farengeyt ↔ selsiy  

---

### 4.6 Tezlik (Speed)

20. km/soat ↔ mil/soat  

---

### 4.7 Quvvat (Power)

21. ot kuchi ↔ kilovatt  

---

## 5. Har bir konvertor sahifasining minimal tarkibi

Har bir `/kategoriya/konvertor` sahifasi quyidagilarga ega bo‘lishi kerak:

1. **H1**: Masalan — `Dyuymni santimetrga o‘girish`
2. **Qisqa izoh** (2–3 jumla)
3. **Konvertor vidjeti**:
   - Son kiritish
   - From / To birliklar
   - Natija
   - Almashtirish (swap)
   - Nusxa olish (copy)
4. **Misollar**:
   - 1 dyuym = 2.54 sm
   - 10 dyuym = 25.4 sm
5. **Tez-tez ishlatiladigan qiymatlar jadvali**
6. **FAQ (2–3 savol)**
7. **Bog‘liq konvertorlarga ichki havolalar**

Bu tuzilma “thin content” muammosidan qochish uchun tanlangan.

---

## 6. V1 da ataylab kiritilmagan narsalar

- Valyuta konvertori (backend va live rate talab qiladi)
- Ilmiy/fizik murakkab birliklar
- Data storage (MB, GB va h.k.)
- Juda kam ishlatiladigan muhandislik birliklari

---

## 7. Keyingi bosqichlar (keyinchalik)

- Yangi konvertorlar qo‘shish
- Kalkulyatorlar (qurilish, texnika)
- PWA / mobil ilova
- Reklama (AdSense) yoki boshqa monetizatsiya

---

**Hujjat maqsadi**:  
olchov.uz loyihasini vaqt o‘tib davom ettirishda fikrlar va qarorlar yo‘qolib ketmasligi uchun yagona manba bo‘lib xizmat qilish.
