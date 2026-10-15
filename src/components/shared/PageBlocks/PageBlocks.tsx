import { FC } from "react";

import {
  InfoBlock,
  ArticlesBlock,
  AccordionBlock,
  ScrollCardsBlock,
  InstructionsBlock,
} from "./components";

import { PageBlock, PageBlocksProps } from "./interfaces";
import OnlineRegButton from "../OnlineRegButton";

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
      case PageBlock.bookBtn:
        return (
          <div
            className="flex justify-center pt-4 pb-14 md:pt-8 md:pb-16"
            key="bookBtn"
          >
            <OnlineRegButton>Записатися на консультацію</OnlineRegButton>
          </div>
        );
      default:
        return null;
    }
  });
};

export default PageBlocks;
