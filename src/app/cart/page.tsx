import { getCart } from "@/lib/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
  title: "Your Cart - Watch Shop",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <div className="px-3 ">
      <h1 className="mb-6 text-3xl font-bold ">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">Total: {cart?.subtotal || 0}$</p>
        <button className="btn p-3 uppercase bg-blue-800 rounded-lg sm:w-[200px]">
          checkout
        </button>
      </div>
    </div>
  );
}
