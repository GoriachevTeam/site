import { SurgeryStep } from "../../interfaces";

export interface StepsCarouselProps {
  steps: SurgeryStep[];
  image?: string;
}

export type StepCardProps = {
  surgeryStep: SurgeryStep;
  idx?: string;
};
