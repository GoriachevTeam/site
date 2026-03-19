import { FC } from "react";
import Image from "next/image";

import StepCard from "./StepCard";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SURGERY_STEPS } from "./constants";

import { StepsCarouselProps } from "./interfaces";

const StepsCarousel: FC<StepsCarouselProps> = ({ steps, image }) => (
  <Carousel
    className="w-full"
    opts={{
      watchDrag: steps.length > 1,
    }}
  >
    <CarouselContent>
      {steps?.map((step, idx) => {
        const option = SURGERY_STEPS[step];

        return (
          <CarouselItem key={idx}>
            <StepCard
              surgeryStep={step}
              idx={steps.length > 1 && !option.labelType ? `${idx + 1}. ` : ""}
            />
            {image ? (
              <Image
                className="my-2 mx-auto lg:hidden"
                src={image}
                width={600}
                height={600}
                alt={option.label}
              />
            ) : null}
          </CarouselItem>
        );
      })}
    </CarouselContent>
    {steps.length > 1 ? (
      <>
        <CarouselPrevious />
        <CarouselNext />
      </>
    ) : null}
  </Carousel>
);

export default StepsCarousel;
