"use client";

import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { useState } from "react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <label tabIndex={0} onClick={toggleDropdown} className="cursor-pointer">
        {user ? (
          <Image
            src={user?.image || avatar}
            alt="Profile picture"
            width={30}
            height={30}
            className="w-8 rounded-full"
          />
        ) : (
          <Image
            src={avatar}
            alt="Profile picture"
            width={30}
            height={30}
            className="w-7 rounded-full"
          />
        )}
      </label>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="absolute top-10 right-0 bg-white p-2 border rounded shadow  flex-nowrap z-50"
        >
          <li>
            {user ? (
              <button
                className="w-full text-md"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            ) : (
              <button className="w-full text-md" onClick={() => signIn()}>
                Sign In
              </button>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}
