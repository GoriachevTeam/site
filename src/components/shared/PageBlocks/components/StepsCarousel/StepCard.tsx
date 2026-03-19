import { FC } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { SURGERY_STEPS } from "./constants";

import { StepCardProps } from "./interfaces";
import { StepLabel } from "../../interfaces";

const StepCard: FC<StepCardProps> = ({ surgeryStep, idx }) => {
  const { label, labelType } = SURGERY_STEPS[surgeryStep];

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <Image
        className="opacity-100 transition-opacity duration-400 max-w-80 mx-auto"
        src={`/svg/surgery/${surgeryStep}.svg`}
        width={600}
        height={600}
        alt={label}
      />
      <p
        className={cn(
          "flex max-w-10/12 items-center gap-1 rounded-lg px-4 py-2 transition-opacity duration-400 opacity-100 bg-slate-100 text-slate-900",
          {
            "bg-red-50 text-red-900": labelType === StepLabel.danger,
          },
          {
            "bg-green-50 text-green-900": labelType === StepLabel.success,
          },
        )}
      >
        {labelType === StepLabel.danger ? <X size={16} /> : null}
        {labelType === StepLabel.success ? <Check size={16} /> : null}
        {`${idx || ""}${label}`}
      </p>
    </div>
  );
};

export default StepCard;
