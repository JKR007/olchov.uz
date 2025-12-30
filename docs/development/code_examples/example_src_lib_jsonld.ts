// src/lib/jsonld.ts
type WebAppArgs = {
  url: string;
  name: string;
  description: string;
  categoryName: string;
  inLanguage?: string; // default: "uz-Latn"
};

export function buildWebApplicationJsonLd(args: WebAppArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: args.name,
    description: args.description,
    url: args.url,
    applicationCategory: "UtilitiesApplication",
    browserRequirements: "Requires JavaScript",
    inLanguage: args.inLanguage ?? "uz-Latn",
    about: [
      {
        "@type": "Thing",
        name: args.categoryName,
      },
    ],
  };
}

type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.answer,
      },
    })),
  };
}

