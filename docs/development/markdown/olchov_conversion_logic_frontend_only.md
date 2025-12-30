# olchov.uz — Conversion Logic (Frontend-only Architecture)

Ushbu hujjat **olchov.uz** loyihasi uchun barcha konvertatsiyalarni  
**faqat frontend (Next.js)** orqali amalga oshirish arxitekturasini belgilaydi.

Backend, API yoki tashqi servislar **ishlatilmaydi**.

---

## Asosiy Prinsiplar (LOCK)

- Backend yo‘q
- Barcha hisob-kitoblar frontend’da
- Deterministik va tez ishlovchi formulalar
- Bitta manba (single source of truth)
- Cloudflare Pages uchun optimallashtirilgan

---

## Asosiy G‘oya: Base Unit Model

Har bir kategoriya uchun:
- bitta **asosiy birlik (base unit)**
- boshqa birliklar **koeffitsient** orqali bog‘lanadi

---

## Universal Formula

```
value_in_base = input * from.factor
result = value_in_base / to.factor
```

---

## Folder Tuzilishi (Next.js)

```
src/
├── conversions/
│   ├── length.ts
│   ├── weight.ts
│   ├── temperature.ts
│   ├── area.ts
│   └── volume.ts
│
├── lib/
│   ├── convert.ts
│   ├── round.ts
│   └── types.ts
```

---

## Uzunlik Birliklari (length.ts)

```ts
export const lengthUnits = {
  metr: { label: "Metr", factor: 1 },
  santimetr: { label: "Santimetr", factor: 0.01 },
  millimetr: { label: "Millimetr", factor: 0.001 },
  dyuym: { label: "Dyuym", factor: 0.0254 },
  fut: { label: "Fut", factor: 0.3048 },
  yard: { label: "Yard", factor: 0.9144 },
  kilometr: { label: "Kilometr", factor: 1000 },
};
```

---

## Konvertatsiya Yadrosi (convert.ts)

```ts
export function convert(
  value: number,
  fromFactor: number,
  toFactor: number
) {
  return (value * fromFactor) / toFactor;
}
```

---

## Rounding Qoidalari

```ts
export function round(value: number) {
  if (Math.abs(value) >= 1) {
    return Number(value.toFixed(4));
  }
  return Number(value.toFixed(6));
}
```

---

## Harorat — Maxsus Formula

```ts
export function cToF(c: number) {
  return (c * 9) / 5 + 32;
}

export function fToC(f: number) {
  return ((f - 32) * 5) / 9;
}
```

---

## Sahifa Mapping

```
/uzunlik/dyuym-sm
```

```ts
{
  category: "length",
  from: "dyuym",
  to: "santimetr"
}
```

---

## UX Qoidalari

- Live conversion
- Bo‘sh input → natija yo‘q
- Noto‘g‘ri input → error ko‘rsatilmaydi
- Decimal separator: `.`
- Mobile-first

---

## Kengaytirish

- Yangi birlik → object qo‘shish
- Yangi kategoriya → yangi file
- Mobil app → reuse mumkin

---

## Yakun

Ushbu hujjat **V1 Conversion Logic lock** hisoblanadi.
