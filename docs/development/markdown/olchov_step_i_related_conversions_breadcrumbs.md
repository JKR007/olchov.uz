# Step I: Related Conversions + Breadcrumbs

Ushbu hujjat **olchov.uz** loyihasida **internal linking** va **navigatsiya**
ni kuchaytirish uchun amalga oshirilgan **Step I** bosqichini tavsiflaydi.

Maqsad:
- Crawl depth’ni kamaytirish
- Topical authority’ni oshirish
- UX’ni yaxshilash
- Converter sahifalarni o‘zaro bog‘lash

---

## 1. Breadcrumbs (SEO + UX)

### 1.1 Nima uchun kerak?
- Google sahifa ierarxiyasini tushunadi
- Foydalanuvchi qayerda ekanini biladi
- Category hub sahifalarga kuch beradi

---

### 1.2 Breadcrumb komponenti

**Fayl:** `src/components/Breadcrumbs.tsx`

```tsx
import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={i}>
            {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

### 1.3 Converter page’da ishlatish

```tsx
<Breadcrumbs
  items={[
    { label: "Bosh sahifa", href: "/" },
    { label: config.label, href: `/${config.slug}` },
    { label: `${fromLabel} → ${toLabel}` },
  ]}
/>
```

---

## 2. Smart Related Conversions

### 2.1 Qanday tanlanadi?

Related conversions:
1. Reverse pair (eng muhim)
2. Bir xil `from` birliklar
3. Bir xil `to` birliklar

---

### 2.2 Related pairs logikasi

**Fayl:** `src/lib/related.ts`

```ts
export function getRelatedPairs(category, from, to, limit = 6) {
  // reverse + same from + same to
}
```

---

### 2.3 RelatedConversions komponenti

**Fayl:** `src/components/RelatedConversions.tsx`

```tsx
<Link href={`/${category}/${p.from}-${p.to}`}>
  {getUnitLabel(p.from)} → {getUnitLabel(p.to)}
</Link>
```

---

### 2.4 Converter page’da ulash

```tsx
<RelatedConversions
  category={config.slug}
  categoryLabel={config.label}
  from={from}
  to={to}
/>
```

---

## 3. Category Hub Link

Har bir converter sahifada:
- kamida 1 ta link → `/${category}`

Bu:
- category sahifalarni kuchaytiradi
- crawl’ni chuqurlashishdan saqlaydi

---

## 4. Natija

Step I dan keyin:
- Converter → Converter internal linklar mavjud
- Converter → Category → Converter zanjiri mustahkam
- UX ancha yaxshilandi
- SEO struktura professional holatga keldi

---

## Xulosa

**Step I** — olchov.uz loyihasining
**internal linking backbone** hisoblanadi.

Keyingi bosqich:
👉 **Step J: Performance & polish**
