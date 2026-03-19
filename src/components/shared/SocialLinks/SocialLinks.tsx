import { FC } from "react";

import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "./constants";

import { SocialLinksProps } from "./interfaces";

const SocialLinks: FC<SocialLinksProps> = ({ className }) => (
  <ul className={cn("flex gap-6 items-center", className)}>
    {SOCIAL_LINKS.map(({ url, Icon }) => (
      <li key={url}>
        <a href={url} target="_blank">
          <Icon className="size-6 [&_path]:fill-[inherit]A" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
