import { FC } from "react";

import {
  InfoBlock,
  ArticlesBlock,
  AccordionBlock,
  ScrollCardsBlock,
  InstructionsBlock,
} from "./components";

import { PageBlock, PageBlocksProps } from "./interfaces";

const PageBlocks: FC<PageBlocksProps> = ({ blocks }) => {
  return blocks.map((option, idx) => {
    switch (option.type) {
      case PageBlock.accordion:
        return <AccordionBlock {...option} key={idx} />;
      case PageBlock.info:
        return <InfoBlock {...option} key={idx} />;
      case PageBlock.instruction:
        return <InstructionsBlock {...option} key={idx} />;
      case PageBlock.scrollCards:
        return <ScrollCardsBlock {...option} key={idx} />;
      case PageBlock.articles:
        return <ArticlesBlock {...option} key={idx} />;
      default:
        return null;
    }
  });
};

export default PageBlocks;
