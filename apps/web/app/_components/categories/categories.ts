import { EducationIcon } from "../../icons/education";
import { FactoryIcon } from "../../icons/factory";
import { BabyIcon } from "../../icons/baby";
import { PoliticsIcon } from "../../icons/politics";

export interface CategoryType {
  id: string;
  name: string;
  iconComponent: ({ className }: { className: string }) => JSX.Element;
  variant: string;
  selected: boolean;
}

export const CATEGORIES: CategoryType[] = [
  {
    id: "1",
    name: "Population",
    iconComponent: BabyIcon,
    variant: "text-green-900 fill-green-900 bg-green-100",
    selected: true,
  },
  {
    id: "2",
    name: "Economie",
    iconComponent: FactoryIcon,
    variant: "text-yellow-700 fill-yellow-700 bg-yellow-100",
    selected: true,
  },
  {
    id: "3",
    name: "Education",
    iconComponent: EducationIcon,
    variant: "text-purple-900 fill-purple-900 bg-purple-200",
    selected: true,
  },
  {
    id: "4",
    name: "Politique",
    iconComponent: PoliticsIcon,
    variant: "text-blue-900 fill-blue-900 bg-blue-200",
    selected: true,
  },
];
