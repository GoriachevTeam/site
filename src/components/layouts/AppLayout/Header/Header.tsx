"use client";

import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isArray } from "lodash";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import SocialLinks from "@/components/shared/SocialLinks";
import OnlineRegButton from "@/components/shared/OnlineRegButton";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { DESKTOP_LINKS, MOBILE_LINKS, SERVICE_LINKS } from "./constants";
import { ADRESSES } from "@/lib/adresses";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const path = usePathname();
  const paths = path.split("/");
  const route = `/${paths[1]}`;

  const toggleServiceMenu = useCallback(
    () => setServiceOpen((prev) => !prev),
    [],
  );

  useLayoutEffect(() => {
    setMenuOpen(false);
    setServiceOpen(false);
  }, [path]);

  useEffect(() => {
    window?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [path]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 isolate z-50 flex h-24 w-full flex-col items-center justify-center bg-white text-slate-950 transition-shadow duration-500",
        {
          "shadow-md shadow-slate-700/10": scrolled,
        },
      )}
    >
      {serviceOpen ? (
        <div
          onClick={() => setServiceOpen(false)}
          className="fixed inset size-full left-0 top-0 bg-[rgba(0,0,0,0.3)]"
        />
      ) : null}
      <div className="flex bg-white size-full relative">
        <div className="container flex items-center justify-between my-auto">
          <Link href="/">
            <Image
              className="size-10"
              src="/svg/logo-square.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
          <nav className="hidden lg:flex mr-auto ml-5">
            <ul className="flex flex-col gap-3 text-lg lg:flex-row lg:items-center lg:gap-5">
              {DESKTOP_LINKS.map((option, idx) => {
                return isArray(option) ? (
                  <li key={idx}>
                    <Button
                      onClick={toggleServiceMenu}
                      variant="secondary"
                      className="px-0 text-lg"
                    >
                      Послуги
                      <ChevronDown
                        className={cn(
                          "size-6 transition-transform duration-300",
                          {
                            "rotate-180": serviceOpen,
                          },
                        )}
                      />
                    </Button>
                    <div
                      className={cn(
                        "absolute left-0 top-full w-full z-20 bg-white shadow-md shadow-slate-700/20 transition-height duration-200",
                        serviceOpen
                          ? "h-42 xl:h-52 [&>div]:opacity-100"
                          : "h-0 [&>div]:opacity-0 overflow-hidden",
                      )}
                    >
                      <div className="container grid grid-cols-5 pb-6 gap-4 duration-300">
                        {SERVICE_LINKS.map(({ url, name, img }) => (
                          <Link
                            href={url}
                            className={cn(
                              "flex flex-col gap-2 text-base font-medium transition-colors duration-500 hover:text-cyan-600",
                              {
                                "text-cyan-600": path === url,
                              },
                            )}
                            key={url}
                          >
                            <Image
                              className="h-22 xl:h-35.5 2xl:h-38 object-cover transition-[filter] duration-500 hover:saturate-130"
                              src={img}
                              width={400}
                              height={3000}
                              alt={name}
                            />
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={option.url}>
                    <Link
                      className={cn(
                        "transition-color font-medium duration-500",
                        {
                          "text-cyan-700": option.url === route,
                        },
                      )}
                      href={option.url}
                    >
                      {option.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className="hidden flex-col gap-1 text-right text-sm xl:flex mx-6">
            <li>
              <Link href="tel:+380667900090" className="font-semibold text-sm">
                +38 0(66) 790 0 090
              </Link>
            </li>
            <li>
              <Button
                className="p-0 text-sm whitespace-pre-line xl:whitespace-normal"
                variant="link"
                asChild
              >
                <Link
                  href={ADRESSES[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ADRESSES[0].name}
                </Link>
              </Button>
            </li>
          </ul>
          <OnlineRegButton>Подати заявку</OnlineRegButton>
          <nav
            className={`lg:hidden fixed top-24 inset-0 left-0 w-full bg-white backdrop-blur-md transition-all duration-300 ${
              menuOpen ? "h-screen overflow-y-scroll" : "overflow-hidden h-0"
            }`}
          >
            <div className="container flex flex-col h-fullA pt-2 pb-7">
              <ul className="flex flex-col gap-3 text-lg lg:flex-row lg:items-center lg:gap-5 mb-auto">
                {MOBILE_LINKS.map(({ name, url }) => (
                  <Link
                    className={cn("transition-color font-medium duration-500", {
                      "text-cyan-700": route === url,
                    })}
                    href={url}
                    key={url}
                  >
                    {name}
                  </Link>
                ))}
              </ul>
              <hr className="my-6" />
              <SocialLinks />
              <Link
                className="font-semibold mt-4 text-base block"
                href="tel:+380667900090"
              >
                +38 0(66) 790 0 090
              </Link>
            </div>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative size-10 flex flex-col justify-between lg:hidden group cursor-pointer p-2.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {[1, 2, 3].map((line) => (
              <span
                className={cn(
                  "block h-[2px] w-full bg-black rounded-md transition-all duration-300",
                  {
                    [menuOpen
                      ? "rotate-45 translate-y-[9px]"
                      : "translate-y-0.5"]: line === 1,
                    [`${menuOpen ? "opacity-0" : ""}`]: line === 2,
                    [menuOpen
                      ? "-rotate-45 -translate-y-[9px]"
                      : "-translate-y-0.5"]: line === 3,
                  },
                )}
                key={line}
              />
            ))}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
