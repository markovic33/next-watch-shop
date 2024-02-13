"use client";

import { ShoppingCart } from "@/lib/cart";
import Link from "next/link";
import { useState } from "react";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  const total = cart?.size || 0;
  const subtotal = cart?.subtotal || 0;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute w-[8px] h-[8px] top-[-1px] right-[12px] text-black rounded-full px-2 py-1 text-xs font-bold z-30">
          {total || 0}
        </span>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-[-5px] mt-2 font-semibold`}
      >
        <ul className="text-sm" aria-labelledby="dropdownDefaultButton">
          <li>
            <span className="block py-2 m-auto px-2">{total} Items</span>
            <span className="block py-2 m-auto px-2 text-gray-400 font-normal">
              Total: {subtotal}$
            </span>
            <div className="block py-2 px-3">
              <Link
                href="/cart"
                className="flex justify-center btn rounded bg-blue-400 p-2 text-black"
                onClick={closeDropdown}
              >
                View cart
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
