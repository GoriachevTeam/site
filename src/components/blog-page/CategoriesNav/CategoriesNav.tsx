"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { CategoriesNavProps } from "./interfaces";

const CategoriesNav: FC<CategoriesNavProps> = ({ categories }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2 pt-12">
      <Button
        variant={pathname === "/blog" ? "default" : "outline"}
        size="sm"
        asChild
      >
        <Link href="/blog">Усі дописи</Link>
      </Button>

      {categories.map(({ title, slug }) => {
        const href = `/blog/katehoriia/${slug}`;
        const isActive = pathname === href;

        return (
          <Button
            key={slug}
            variant={isActive ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link href={href}>{title}</Link>
          </Button>
        );
      })}
    </nav>
  );
};

export default CategoriesNav;
