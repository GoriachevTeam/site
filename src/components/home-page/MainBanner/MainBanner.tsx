import { FC } from "react";

import SourceVideo from "@/components/shared/SourceVideo";

import LogoWide from "@/assets/logo-wide-colorful.svg";

const MainBanner: FC = () => {
  return (
    <section className="relative h-[calc(100vh_-_var(--header-h))] overflow-hidden text-white bg-gull-gray">
      <div className="container flex h-full flex-col items-center justify-center gap-12">
        <h1 className="relative z-1 w-full">
          <LogoWide className="h-auto w-full drop-shadow-xl saturate-120" />
          <span className="sr-only">
            Офтальмологічний центр Дмитра Горячева у Львові
          </span>
        </h1>
        <p className="text-center drop-shadow-lg lg:text-xl relative z-1">
          Зір - мистецтво бачити непомітне
        </p>
        <SourceVideo
          className="absolute inset-0 z-0 h-full w-full object-cover blur-xs brightness-90"
          webm="/video/home/hero-banner.webm"
          mp4="/video/home/hero-banner.mp4"
          aria-hidden="true"
          role="presentation"
          autoPlay
          loop
        />
      </div>
    </section>
  );
};

export default MainBanner;
