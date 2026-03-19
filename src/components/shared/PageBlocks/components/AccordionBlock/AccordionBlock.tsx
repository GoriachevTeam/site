"use client";

import { FC, useState } from "react";
import Image from "next/image";

import StepsCarousel from "../StepsCarousel";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { SURGERY_STEPS } from "../StepsCarousel/constants";

import { SurgeryStep, TypeAccordionBlock } from "../../interfaces";

const AccordionBlock: FC<TypeAccordionBlock> = ({
  title,
  accordion,
  carousel,
  stepsOut,
  carouselName,
}) => {
  const [step, setStep] = useState<string | undefined>("0");

  const isOneSlide = accordion?.length <= 1;

  const handleValueChange = (value: string) => {
    setStep(value);
  };

  const currentOutSteps = stepsOut && step ? accordion[+step]?.steps : [];

  const carouselStep = step && carousel?.[+step];
  const isImgBigger =
    isOneSlide && carouselStep
      ? !SURGERY_STEPS[carouselStep]?.labelType
      : false;

  return (
    <section className="py-12">
      <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12 items-start place-content-center">
        <Accordion
          type="single"
          collapsible={!isOneSlide}
          defaultValue={step}
          onValueChange={handleValueChange}
        >
          {accordion.map(({ name, desc, steps, ...rest }, idx) => (
            <AccordionItem value={`${idx}`} key={idx}>
              <AccordionTrigger
                className={cn("text-xl font-bold lg:text-2xl", {
                  "md:text-3xl!": isOneSlide,
                })}
                headerClassName="sticky top-[var(--header-h)] bg-white z-2"
                disabled={isOneSlide}
              >
                {name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="prose">{desc}</div>
                {steps?.length && !stepsOut ? (
                  <StepsCarousel steps={steps} image={rest.img} />
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {carousel?.length || currentOutSteps?.length ? (
          <div
            className={cn("flex flex-col items-center gap-6 py-4", {
              "[&_img]:max-w-full md:[&_img]:max-w-117.5": isImgBigger,
            })}
          >
            {carouselName ? (
              <h3 className="text-lg font-semibold text-slate-900">
                {carouselName}
              </h3>
            ) : null}
            <StepsCarousel
              steps={(carousel || currentOutSteps) as SurgeryStep[]}
            />
          </div>
        ) : (
          <div className="hidden flex-1 bg-slate-50 lg:inline-flex visible">
            {accordion.map(({ name, img }, idx) =>
              img ? (
                <Image
                  className={cn({
                    hidden: `${idx}` !== step,
                  })}
                  src={img}
                  width={1200}
                  height={1200}
                  alt={name}
                  loading="eager"
                  key={idx}
                />
              ) : null,
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AccordionBlock;
