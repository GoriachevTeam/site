import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const YEAR = new Date().getFullYear();

export const getDate = (value?: string) => {
  if (!!value) {
    const formatted = new Date(value).toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formatted;
  }

  return "";
};
