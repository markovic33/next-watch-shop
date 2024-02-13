import { WatchFilterSchema } from "@/lib/validation";
import Select from "./select";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function filterProduct(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { query, material, brand } = WatchFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(query && { query: query.trim() }),
    ...(material && { material }),
    ...(brand && { brand }),
  });

  redirect(`/?${searchParams.toString()}`);
}

export default async function Search() {
  const distinctMaterial = (await prisma?.product
    .findMany({
      select: { material: true },
      distinct: ["material"],
    })
    .then((materials) =>
      materials.map(({ material }) => material).filter(Boolean)
    )) as string[];

  const distinctBrand = (await prisma.product
    .findMany({
      select: { brand: true },
      distinct: ["brand"],
    })
    .then((brands) =>
      brands.map(({ brand }) => brand).filter(Boolean)
    )) as string[];

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white t rounded-lg shadow-xl">
      <form action={filterProduct} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="query" className="block text-sm font-semibold mb-1">
            Search
          </label>
          <input
            id="query"
            name="query"
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Material</label>
          <Select id="material" name="material" defaultValue="">
            <option value="">All Materials</option>
            {distinctMaterial.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Brand</label>
          <Select id="brand" name="brand" defaultValue="">
            <option value="">All Brands</option>
            {distinctBrand.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </div>
        <button
          type="submit"
          className="w-full border-2 bg-gray-200 border-blue-400 rounded-lg p-3"
        >
          Fillter Watch
        </button>
      </form>
    </div>
  );
}
