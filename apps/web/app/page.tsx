import { Searchbar } from "./_components/searchbar/Searchbar";
import { CategoryList } from "./_components/categories/CategoryList";
export default function Home() {
  return (
    <main>
      <h1 className="select-none text-center font-parisienne text-8xl font-bold">
        Tout sur ma ville
      </h1>
      <Searchbar />
      <CategoryList />
    </main>
  );
}
