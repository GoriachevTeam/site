import { FC } from "react";
import { PortableText } from "@portabletext/react";

import { cn } from "@/lib/utils";

import { RteBlockProps } from "./interfaces";

const RteBlock: FC<RteBlockProps> = ({ value, className }) => {
  return (
    <div className={cn(className)}>
      <PortableText
        value={value}
        components={{
          list: {
            number: ({ children }) => (
              <ul className="not-prose list-inside list-disc border-t border-black/70 pt-4 text-base marker:text-cyan-600 lg:flex lg:flex-wrap lg:gap-3">
                {children}
              </ul>
            ),
            bullet: ({ children }) => <ul>{children}</ul>,
          },
          listItem: {
            number: ({ children }) => (
              <li className="py-1 pr-1.5 lg:first:list-none">{children}</li>
            ),
            bullet: ({ children }) => <li>{children}</li>,
          },
        }}
      />
    </div>
  );
};

export default RteBlock;
