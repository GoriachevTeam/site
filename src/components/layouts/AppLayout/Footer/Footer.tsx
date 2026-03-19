import { FC } from "react";
import Link from "next/link";

import SocialLinks from "@/components/shared/SocialLinks";

import LogoWide from "@/assets/logo-wide.svg";

import { YEAR } from "@/lib/utils";
import { ADRESSES } from "@/lib/adresses";
import { CENTER_LINKS } from "./constants";
import { SERVICE_LINKS } from "../Header/constants";

const Footer: FC = () => {
  return (
    <footer className="bg-black py-12 text-slate-50">
      <div className="container flex flex-col-reverse justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Центр</h2>
              <ul className="flex flex-col gap-1">
                {CENTER_LINKS.map(({ url, name }) => (
                  <li key={url}>
                    <Link
                      href={url}
                      className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Послуги</h2>
              <ul className="flex flex-col gap-1">
                {SERVICE_LINKS.map(({ url, name }) => (
                  <li key={url}>
                    <Link
                      href={url}
                      className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-sm mt-auto">
            <p>
              © {YEAR} Офтальмологiчний центр Дмитра Горячева. Всi права
              захищені.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 md:items-end">
          <Link href="/">
            <LogoWide className="w-96 h-auto max-w-full" />
          </Link>
          <div className="flex flex-1 flex-col gap-6 lg:text-right">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-balance text-black text-xl md:text-2xl text-xl font-bold text-white md:text-2xl">
                Графік роботи:
              </h3>
              <p className="whitespace-pre">
                {`Пн-Пт: 09:00 – 18:00\n Сб: 10:00 – 16:00\n Нд: вихідний`}
              </p>
            </div>
            <ul>
              <li className="text-xl font-bold">
                <Link href="tel:+380667900090">+38 0(66) 790 0 090</Link>
              </li>
            </ul>
            {ADRESSES.map(({ name, link }, idx) => (
              <address className="not-italic" key={idx}>
                <a
                  href={link}
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </address>
            ))}
            <SocialLinks className="md:justify-end color-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
