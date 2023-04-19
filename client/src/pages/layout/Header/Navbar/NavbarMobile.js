import React, { useState } from "react";
import { items } from "./Navbar";
import Link from "next/link";

const NavbarMobile = () => {
  const [hide, setHide] = useState(false);

  const handleNavbarMb = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className="flex sm:hidden mb-2">
        <div
          onClick={handleNavbarMb}
          className="text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer hover:text-orange-500"
        >
          Danh Mục
        </div>
        <div className="text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer hover:hover:text-orange-500">
          Truy Cập Vào Tài Khoản
        </div>
        <Link href={'/categories/favorite'} className="text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer hover:hover:text-orange-500">
          Mục Yêu Thich
        </Link>
      </div>
      <ul className={hide ? "" : "hidden"}>
        {items.map((arr) => (
          <Link href={arr.path} key={arr.id}>
            <li
              className={` pl-2 bg-black text-white text-sm p-2 font-medium cursor-pointer `}
            >
              {arr.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default NavbarMobile;
