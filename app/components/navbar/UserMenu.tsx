"use client";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <nav className="flex items-center gap-2">
        <Link
          href={"#"}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </Link>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className=" hidden md:block">
            <Image
              alt="Avatar"
              className="rounded-full"
              height={30}
              width={30}
              src="/images/placeholder.jpg"
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[20vw] md:w-/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={()=>({})} label="Sign up"/>
              <MenuItem onClick={()=>({})} label="Log in"/>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
