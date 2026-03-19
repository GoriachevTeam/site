// "use client";

import { FC } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { TypeInfoBlock } from "../../interfaces";
import StepCard from "../StepsCarousel/StepCard";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { TEXT_ICONS } from "./constants";

const InfoBlock: FC<TypeInfoBlock> = ({
  img,
  reverse,
  body,
  step,
  blurCompare,
  textIcons,
}) => (
  <section className="py-12">
    <div
      className={cn("grid gap-8 lg:grid-cols-2 xl:gap-12  items-center", {
        "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1": !reverse,
      })}
    >
      {img ? (
        <div className="-mx-6 md:mx-0">
          <Image
            className="object-cover"
            src={img.url}
            width={800}
            height={700}
            alt={img.alt}
          />
        </div>
      ) : null}
      {step ? <StepCard surgeryStep={step} /> : null}
      {!!blurCompare?.length ? (
        <ReactCompareSlider
          itemOne={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={blurCompare[0].img.url}
                alt={blurCompare[0].img.alt}
              />
              <span className="pointer-events-none absolute bottom-12 left-0 inline-flex items-center gap-2 bg-cyan-600 px-3 py-2 text-cyan-50 shadow-md">
                {blurCompare[0].icon}
                {blurCompare[0].label}
              </span>
            </div>
          }
          itemTwo={
            <div className="relative w-full h-full">
              <ReactCompareSliderImage
                src={blurCompare[1].img.url}
                alt={blurCompare[1].img.alt}
              />

              <span className="pointer-events-none absolute bottom-12 right-0 inline-flex items-center gap-2 bg-cyan-600 px-3 py-2 text-cyan-50 shadow-md">
                {blurCompare[1].icon}
                {blurCompare[1].label}
              </span>
            </div>
          }
        />
      ) : null}
      <div className="prose max-w-none flex-1 [&_h2]:font-bold [&_h2]:text-balance [&_h2]:text-black [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:not-prose [&_h2]:pb-4">
        {body}
        {textIcons?.length ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 not-prose mt-2">
            {textIcons.map((icon, idx) => {
              const text = TEXT_ICONS[icon];

              return (
                <div className="flex flex-col gap-2" key={idx}>
                  <Image
                    src={`/svg/blue-icons/${icon}.svg`}
                    width={90}
                    height={90}
                    alt={text}
                  />
                  <p className="text-slate-600 md:max-w-50">{text}</p>
                  <span className="-mt-2 h-0.5 w-6 bg-cyan-600" />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  </section>
);

export default InfoBlock;
