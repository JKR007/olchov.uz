export default function ConverterPage({ params }: { params: Params }) {
  const found = findPair(params.category, params.pair);
  if (!found) notFound();

  const { config, from, to } = found;

  const fromLabel = getUnitLabel(from);
  const toLabel = getUnitLabel(to);

  const canonicalUrl = `https://olchov.uz/${config.slug}/${from}-${to}`;

  const webAppJsonLd = buildWebApplicationJsonLd({
    url: canonicalUrl,
    name: `${fromLabel} → ${toLabel} konvertori`,
    description: `${fromLabel} ni ${toLabel} ga tez va aniq aylantiring (olchov.uz).`,
    categoryName: config.label,
  });

  const faqJsonLd = buildFaqPageJsonLd([
    {
      question: `${fromLabel}ni ${toLabel}ga qanday o‘tkazaman?`,
      answer: `Qiymat kiriting — konvertor avtomatik hisoblab beradi. (${fromLabel} → ${toLabel})`,
    },
    {
      question: `Natija nima uchun farq qilishi mumkin?`,
      answer:
        "Ba’zi birliklar (masalan harorat) maxsus formula bilan hisoblanadi. Qolganlar standart koeffitsiyentlar asosida hisoblanadi.",
    },
    {
      question: `Bu konvertor bepulmi?`,
      answer: "Ha. olchov.uz bepul ishlaydi va tezkor konvertatsiya beradi.",
    },
  ]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ... qolgan UI ... */}
    </main>
  );
}

