import { Category } from "@/types/sanity";

export interface CategoriesNavProps {
  categories: Pick<Category, "slug" | "title">[];
}
