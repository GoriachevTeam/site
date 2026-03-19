import { FC } from "react";

import { fetchAllPrices } from "@/lib/prices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PriceAccordions: FC = async () => {
  const prices = await fetchAllPrices();

  const defaultOption = prices[0]?._id;

  return (
    <section className="relative py-12">
      {prices.map(({ _id, name, prices }) => (
        <Accordion
          type="single"
          collapsible
          defaultValue={defaultOption}
          key={_id}
        >
          <AccordionItem value={_id}>
            <AccordionTrigger
              className="text-xl font-bold"
              headerClassName="sticky top-[var(--header-h)] bg-white z-2"
            >
              {name}
            </AccordionTrigger>
            <AccordionContent>
              {prices.map(({ title, description, price }, idx) => (
                <div
                  className="flex gap-2 border-b border-dashed border-slate-300 py-2.5 text-base last:border-0 lg:text-lg"
                  key={idx}
                >
                  <p className="flex flex-1 flex-col gap-1">
                    <span className="max-w-prose font-medium text-pretty text-slate-800">
                      {title}
                    </span>
                    <span className="max-w-prose text-sm text-slate-600 lg:text-base">
                      {description}
                    </span>
                  </p>
                  <p className="font-bold">{price}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default PriceAccordions;
