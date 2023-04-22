import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import SearchBox from "./SearchBox/SearchBox";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-5 max-sm: pt-4 ">
        <Link href={'/'}>
          <img
            src="https://ghienphim3.net/client_assets/images/logov1.png"
            alt=""
            className="max-w-xs max-sm:w-2/3"
          />
        </Link>
        <SearchBox />
        <Link href={"/auth/Login"}>
          <button className="max-md:hidden w-20 h-20 bg-orange-500 text-center text-white my-auto pt-1 rounded-lg shadow-lg shadow-orange-500/50 max-sm:hidden">
            Truy Cập Tài Khoản
          </button>
        </Link>
      </div>
      <Navbar />
      <NavbarMobile />
    </>
  );
}
