import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex justify-center items-center">
      <Link
        href={"/products/" + product.id}
        className="w-[300px] p-3 flex flex-col justify-center border bg-gray-200 shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <div className="flex flex-col items-center">
          <div className="h-36 w-50 mb-2">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={150}
              className="h-full w-full object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold uppercase">{product.name}</h2>
            <div className="flex flex-row items-center gap-4">
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">Material: {product.material}</p>
            </div>
            <p className="text-green-600 font-bold">Price: {product.price}$</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
