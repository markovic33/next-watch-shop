import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  titile: "Watch Shop - Add product",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const brand = formData.get("brand")?.toString();
  const material = formData.get("material")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !brand || !material || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, brand, material, price },
  });

  redirect("/");
}

export default function AddProduct() {
  return (
    <div>
      <h1>Add product</h1>
      <form action={addProduct} className="flex flex-col gap-4">
        <input placeholder="name" required name="name" />
        <textarea placeholder="description" required name="description" />
        <input placeholder="imageUrl" required name="imageUrl" type="url" />
        <input placeholder="brand" name="brand" required />
        <input placeholder="material" name="material" required />
        <input placeholder="price" required name="price" type="number" />
        <button type="submit" className="">
          Add product
        </button>
      </form>
    </div>
  );
}
