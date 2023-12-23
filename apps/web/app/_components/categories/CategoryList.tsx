"use client";

import { Category } from "./Category";
import { CATEGORIES, CategoryType } from "./categories";
import React from "react";

export const CategoryList = () => {
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);

  const handleSelectedCategories = (id: string) => {
    const updatedCategories: CategoryType[] = categories.map(
      (category: CategoryType) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category,
    );
    setCategories(updatedCategories);
  };

  return (
    <ul className="my-2 flex w-full justify-center gap-2">
      {categories.map((category) => (
        <Category
          {...category}
          handleSelectedCategories={handleSelectedCategories}
          key={category.id}
        />
      ))}
    </ul>
  );
};
