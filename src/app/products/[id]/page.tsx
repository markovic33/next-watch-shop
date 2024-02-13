import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - Watch Shop",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center p-4 gap-4">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div className="">
        <h1 className="text-5xl font-bold my-6">{product.name}</h1>
        <p className="text-gray-500">
          Brand: <span className="font-semibold">{product.brand} </span>
        </p>
        <p className="mt-4 text-gray-500">
          Material: <span className="font-semibold">{product.material}</span>
        </p>
        <p className="mt-4 text-gray-500">
          Price:{" "}
          <span className="font-semibold text-green-400">
            {product.price}${" "}
          </span>
        </p>
        <p className="my-6 text-gray-500">{product.description} </p>
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}
