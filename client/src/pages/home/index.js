import { FaturedMovies } from "@/data/FaturedMovies";
import MainLayout from "../layout/MainLayout";
import Poster from "./components/Poster/Poster";
import SlickSlide from "./components/SlickSlide/SlickSlide";
import SideBarList from "./components/SideBarList/SideBarList";
import ProductList from "../components/ProductList/ProductList";


export default function home() {
  return (
    <MainLayout>
      <div>
        <Poster/>
        <div className="text-2xl font-semibold pl-8 mt-8 ml-9 font-serif">
          Phim Hot
        </div>
        <SlickSlide data={FaturedMovies} />
        <div className="flex max-sm:block max-md:block max-lg:block">
          <div className="w-3/4 p-4 max-sm:w-full max-md:w-full max-lg:w-full">
            <div className="text-2xl font-semibold pl-4 mt-8 ml-4 font-serif">
              Phim Mới Cập Nhật
            </div>
            <ProductList data={FaturedMovies} />
            <div className="text-2xl font-semibold pl-4 mt-8 ml-4 font-serif">
              Phim Hoạt Hình
            </div>
            <ProductList data={FaturedMovies} />
          </div>
          <div>
            <div className="max-sm:hidden max-md:hidden max-lg:hidden">
              <div className="text-2xl font-semibold p-4 mt-8 ">
                Phim Sắp Ra Mắt
              </div>
              <SideBarList data={FaturedMovies} />
            </div>
            <div className="max-sm:px-2 max-md:px-3 max-lg:p-3">
              <div className="text-2xl font-semibold p-4 mt-8">TRENNDING</div>
              <SideBarList data={FaturedMovies} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
