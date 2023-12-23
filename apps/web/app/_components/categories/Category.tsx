import React from "react";
import clsx from "clsx";

export const Category = ({
  id,
  name,
  iconComponent,
  variant,
  selected,
  handleSelectedCategories,
}: {
  id: string;
  name: string;
  iconComponent: ({ className }: { className: string }) => JSX.Element;
  variant: string;
  selected: boolean;
  handleSelectedCategories: (id: string) => void;
}) => {
  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      handleSelectedCategories(id);
    }
  };

  return (
    <li>
      <button
        className={clsx(
          "flex cursor-pointer items-center gap-1.5 px-2.5 py-1",
          {
            [variant]: selected,
            "bg-gray-200 fill-gray-700 text-gray-700 opacity-60": !selected,
          },
        )}
        onClick={() => handleSelectedCategories(id)}
        onKeyUp={handleKeyUp}
      >
        {iconComponent({
          className: `fill-inherit h-3`,
        })}
        <span className={`select-none font-bayon text-sm font-bold uppercase`}>
          {name}
        </span>
      </button>
    </li>
  );
};
