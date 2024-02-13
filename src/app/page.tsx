import HeroContainer from "@/components/HeroContainer";
import Products from "@/components/Products";
import { WatchFilterValues } from "@/lib/validation";
import Image from "next/image";

interface PageProps {
  searchParams: {
    query?: string;
    material?: string;
    brand?: string;
  };
}

export default function Home({
  searchParams: { query, material, brand },
}: PageProps) {
  const filterValues: WatchFilterValues = {
    query,
    material,
    brand,
  };
  return (
    <div className="">
      <HeroContainer />
      <Products filterValues={filterValues} />
    </div>
  );
}
