import { FC } from "react";

import CategoriesNav from "./CategoriesNav";

import { fetchAllCategories } from "@/lib/articles";

const CategoriesNavWrapper: FC = async () => {
  const categories = await fetchAllCategories();

  return <CategoriesNav categories={categories} />;
};

export default CategoriesNavWrapper;
