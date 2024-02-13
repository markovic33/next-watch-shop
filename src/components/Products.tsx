import prisma from "@/lib/prisma";
import ProductCard from "./ProductCard";
import { WatchFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

interface ProductsResultProps {
  filterValues: WatchFilterValues;
}

export default async function Products({
  filterValues: { query, material, brand },
}: ProductsResultProps) {
  const searchString = query
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          { name: { contains: searchString, mode: "insensitive" } },
          { material: { contains: searchString, mode: "insensitive" } },
          { brand: { contains: searchString, mode: "insensitive" } },
        ],
      }
    : {};

  const where: Prisma.ProductWhereInput = {
    AND: [searchFilter, material ? { material } : {}, brand ? { brand } : {}],
  };

  const products = await prisma.product.findMany({
    where,
    orderBy: { id: "desc" },
  });

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-center">
      <div className="flex-4 p-2">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {products.slice(0, 8).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
