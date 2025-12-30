// src/components/SeoContentBlock.tsx
import { buildSeoContent } from "@/lib/seoContent";

type Props = {
  category: "uzunlik" | "ogirlik" | "harorat" | "maydon" | "hajm";
  from: string;
  to: string;
  fromLabel: string;
  toLabel: string;
  fromVariants?: string[];
  toVariants?: string[];
};

export default function SeoContentBlock(props: Props) {
  const content = buildSeoContent(props);

  return (
    <section className="mt-8 space-y-4 rounded-xl border p-4">
      <h2 className="text-base font-semibold">{content.h2}</h2>
      <p className="text-sm text-gray-700">{content.intro}</p>

      {content.variantsLine ? (
        <p className="text-xs text-gray-600">{content.variantsLine}</p>
      ) : null}

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{content.formulaTitle}</h3>
        <div className="rounded-lg bg-gray-50 p-3 text-sm">
          <code>{content.formula}</code>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{content.examplesTitle}</h3>
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Kiritish</th>
                <th className="px-3 py-2 text-left font-semibold">Natija</th>
              </tr>
            </thead>
            <tbody>
              {content.examples.map((ex) => (
                <tr key={ex.input} className="border-t">
                  <td className="px-3 py-2">{ex.input}</td>
                  <td className="px-3 py-2 font-medium">{ex.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold">{content.faqTitle}</h3>
        <div className="space-y-3">
          {content.faq.map((item) => (
            <div key={item.q} className="rounded-lg border p-3">
              <div className="text-sm font-semibold">{item.q}</div>
              <p className="mt-1 text-sm text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

