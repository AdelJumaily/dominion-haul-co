import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqList({
  items,
  openFirst = false,
}: {
  items: FaqItem[];
  openFirst?: boolean;
}) {
  if (!items.length) return null;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={openFirst ? "item-0" : undefined}
      className="rounded-xl border border-stone-200 bg-white px-5"
    >
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-stone-200">
          <AccordionTrigger className="py-4 text-base font-semibold text-stone-900 hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.95rem] leading-relaxed text-stone-600">
            <p>{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
