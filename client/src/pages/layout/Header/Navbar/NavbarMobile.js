import React, { useState } from "react";
import { items } from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const [hide, setHide] = useState(false);
  const router = useRouter();

  const handleNavbarMb = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className="flex sm:hidden mb-2">
        <div
          onClick={handleNavbarMb}
          className={`text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer ${hide?"text-orange-500":""}`}
        >
          Danh Mục
        </div>
        <Link href={'/auth/Login'} className="text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer">
          Truy Cập Vào Tài Khoản
        </Link>
        <Link href={'/categories/favorite'} className={`text-gray-200 text-sm px-3 mt-4 font-medium cursor-pointer ${router.asPath==='/categories/favorite'?"text-orange-500":""}`}>
          Mục Yêu Thich
        </Link>
      </div>
      <ul className={hide ? "" : "hidden"}>
        {items.map((arr) => (
          <Link href={arr.path} key={arr.id}>
            <li
              className={` pl-2 bg-black text-white text-sm p-2 font-medium cursor-pointer ${router.asPath===arr.path?"text-orange-500":""} `}
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
