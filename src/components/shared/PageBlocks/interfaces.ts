import { JSX } from "react";

import { TypeImg } from "@/types/common";

export interface PageBlocksProps {
  blocks: TypePageBlocks[];
}

export type TypePageBlocks =
  | TypeAccordionBlock
  | TypeInfoBlock
  | TypeInstructionsBlock
  | TypeScrollCards
  | TypeArticlesBlock;

export type TypeAccordionBlock = {
  type: PageBlock.accordion;
  title: string;
  carouselName?: string;
  carousel?: SurgeryStep[];
  stepsOut?: boolean;
  accordion: Array<{
    name: string;
    desc: React.ReactNode;
    img?: string;
    steps?: SurgeryStep[];
  }>;
};

export type TypeArticlesBlock = {
  type: PageBlock.articles;
  title: string;
  articles: {
    img: string;
    name: string;
    desc: JSX.Element;
  }[];
};

export interface TypeScrollCards {
  type: PageBlock.scrollCards;
  title: string;
  cards: {
    img: string;
    name: string;
    desc: string;
  }[];
}

export interface TypeInfoBlock {
  type: PageBlock.info;
  img?: TypeImg;
  reverse?: boolean;
  body: React.ReactNode;
  step?: SurgeryStep;
  blurCompare?: TypeBlurCompare[];
  textIcons?: TextIcon[];
}

export interface TypeInstructionsBlock {
  type: PageBlock.instruction;
  title: string;
  options: TypeInstruction[];
}

export type TypeInstruction = {
  text: string;
  icon: InstructionIcon;
};

export enum InstructionIcon {
  "no-touch" = "no-touch",
  "no-makeup" = "no-makeup",
  "tears" = "tears",
  "contacts" = "contacts",
  "doc" = "doc",
  "shield" = "shield",
  "no-dust" = "no-dust",
  "eye-drops" = "eye-drops",
  "sunglasses" = "sunglasses",
  "pc" = "pc",
  "no-swim" = "no-swim",
  "no-sports" = "no-sports",
  "no-drive" = "no-drive",
  "diagnostic" = "diagnostic",
  "no-contacts" = "no-contacts",
  "no-pills-drink" = "no-pills-drink",
  "no-perfume" = "no-perfume",
  "no-smoking" = "no-smoking",
  "pills" = "pills",
  "help" = "help",
  "food" = "food",
  "wipes" = "wipes",
  "no-wash" = "no-wash",
  "tv" = "tv",
  "no-alco" = "no-alco",
  "no-alco-smoke" = "no-alco-smoke",
  "no-pills" = "no-pills",
  "dont-eat" = "dont-eat",
  list = "list",
  toy = "toy",
  "special-glasses" = "special-glasses",
  "no-sun" = "no-sun",
  "no-sunscreen" = "no-sunscreen",
  sunscreen = "sunscreen",
  "no-glasses" = "no-glasses",
  "no-basing" = "no-basing",
}

export enum TextIcon {
  knitting = "knitting",
  "writing" = "writing",
  "makeup-apply" = "makeup-apply",
  "cooking" = "cooking",
  "work-on-pc" = "work-on-pc",
  "gaming" = "gaming",
  "cell-use" = "cell-use",
  "traffic-signs" = "traffic-signs",
  "sightseeing" = "sightseeing",
  "watch-tv" = "watch-tv",
}

export enum SurgeryStep {
  anastezia = "anastezia",
  "close-eye" = "close-eye",
  "cut-in-place" = "cut-in-place",
  "laser-retina-cut" = "laser-retina-cut",
  lens4sec = "lens4sec",
  "open-eye" = "open-eye",
  outrocot = "outrocot",
  prep4laser = "prep4laser",
  "miopia-eye" = "miopia-eye",
  "longsight-eye" = "longsight-eye",
  "astigmatism-eye" = "astigmatism-eye",
  "cloudy-lens" = "cloudy-lens",
  alcon = "alcon",
  ultrasound = "ultrasound",
  introlens = "introlens",
  afterlens = "afterlens",
  retina = "retina",
  microneedle = "microneedle",
  massage = "massage",
  antibiotics = "antibiotics",
  "konus-retina" = "konus-retina",
  "ok-sight" = "ok-sight",
  "2cut" = "2cut",
  zond = "zond",
  "antibiotics-cure" = "antibiotics-cure",
  "anastezia-90" = "anastezia-90",
  "2much-fluid" = "2much-fluid",
  "laser-clean" = "laser-clean",
  stabilization = "stabilization",
  "recomend-drops" = "recomend-drops",
  "anastezia-behind-eye" = "anastezia-behind-eye",
  "laser-bake" = "laser-bake",
  "pressure-down" = "pressure-down",
  "close-eye-back" = "close-eye-back",
  "keratokonus-eye" = "keratokonus-eye",
  "normal-sight" = "normal-sight",
  "epiteli-cut" = "epiteli-cut",
  riboflavin = "riboflavin",
  "zailer-lamp" = "zailer-lamp",
  "protective-lense" = "protective-lense",
  "eye-drops" = "eye-drops",
  "lens4sec-cure" = "lens4sec-cure",
  "laser-50mkm" = "laser-50mkm",
  "enlarged-anastezia" = "enlarged-anastezia",
  "lens-setup" = "lens-setup",
  "laser-impuls" = "laser-impuls",
  "lens-remove" = "lens-remove",
  "3cut" = "3cut",
  "tools-in" = "tools-in",
  "vitreous-out" = "vitreous-out",
  "gas-in" = "gas-in",
  "retina-ok" = "retina-ok",
  "operation-end" = "operation-end",
  "strabismus-eye" = "strabismus-eye",
  "no-strabismus" = "no-strabismus",
  "damaged-tear-film" = "damaged-tear-film",
  "healthy-tear-film" = "healthy-tear-film",
  cleaning = "cleaning",
  "glasses-on" = "glasses-on",
  sparks = "sparks",
  gel = "gel",
  "gel-off" = "gel-off",
  iol = "iol",
  "open-eye-fiksacia" = "open-eye-fiksacia",
  "anastezia-local" = "anastezia-local",
  "cut3-1" = "cut3-1",
  "placing-iol" = "placing-iol",
  "adaptation" = "adaptation",
}

export type TypeBlurCompare = {
  img: TypeImg;
  label: string;
  icon: JSX.Element;
};

export enum PageBlock {
  "accordion" = "accordion",
  "info" = "info",
  "instruction" = "instruction",
  "scrollCards" = "scrollCards",
  articles = "articles",
}

export enum StepLabel {
  "danger" = "danger",
  "success" = "success",
}
