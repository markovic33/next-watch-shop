import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/cart";
import UserButton from "./UserButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="w-full flex justify-between items-center border border-b-2 mb-5 border-b-blue-800 shadow-xl">
      <Link href={"/"} className="flex justify-center items-center ">
        <Image
          src={logo}
          width={40}
          height={40}
          className="h-10 object-cover"
          alt="logo"
        />
        <h1 className="text-md font-semibold">Watch Shop</h1>
      </Link>
      <div className="flex justify-center items-center gap-2 px-4">
        <ShoppingCartButton cart={cart} />
        <UserButton session={session} />
      </div>
    </div>
  );
}
