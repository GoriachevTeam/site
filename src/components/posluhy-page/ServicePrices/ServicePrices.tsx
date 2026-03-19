import { FC } from "react";

import { ServicePricesProps } from "./interfaces";

const ServicePrices: FC<ServicePricesProps> = ({ title, prices }) => {
  return (
    <section className="py-12">
      <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {prices?.map(({ title, description, price }, idx) => (
          <div
            className="flex justify-between gap-4 border-1 border-slate-200 p-4"
            key={idx}
          >
            <div className="flex flex-col gap-3">
              <p className="font-medium">{title}</p>
              {description ? (
                <p className="max-w-prose text-sm text-slate-600 lg:text-base">
                  {description}
                </p>
              ) : null}
            </div>
            <b className="whitespace-nowrap">{price}</b>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePrices;
