import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const items = [
  { id: 1, name: "HOME", path: "/home" },
  { id: 3, name: "PHIM LẺ", path: "" },
  { id: 2, name: "PHIM BỘ", path: "" },
  { id: 4, name: "PHIM VIỆT", path: "/categories/filmViet" },
  { id: 5, name: "PHIM HÀI", path: "" },
  { id: 6, name: "VÕ THUẬT", path: "" },
  { id: 7, name: "HOẠT HÌNH", path: "/categories/cartoon" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex mt-3 max-sm:hidden">
        {items.map((arr) => (
          <Link
            href={arr.path}
            key={arr.id}
            className={`text-gray-200 text-base p-5 font-medium cursor-pointer ${router.asPath===arr.path?"text-orange-500":""}`}
          >
            {arr.name}
          </Link>
        ))}
        <Link href={'/categories/favorite'}
          className={`text-gray-200 text-base p-5 font-medium cursor-pointer ${router.asPath==='/categories/favorite'?"text-orange-500":""}`}
        >
          MỤC YÊU THÍCH
        </Link>
      </div>
    </>
  );
};

export default Navbar;
