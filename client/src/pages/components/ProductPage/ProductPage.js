import React, { useState } from "react";
import { AiOutlineBackward,AiFillForward } from "react-icons/ai";
import Filter from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";

const ProductPage = ({ data }) => {
  const [nextPage, setNextPage] = useState(1)
  console.log(nextPage)

  return (
    <>
      <div className="text-2xl font-semibold pl-4 mt-8 ml-4 font-seri text-center py-4">
        Phim Hoạt Hình
      </div>
      <div className="w-3/4 mx-auto mt-4">
        <div>
          <Filter />
        </div>
        <ProductList data={data} />
      </div>
      <div className="flex flex-col items-center">
        <div className="inline-flex mt-2 xs:mt-0">
          <button onClick={e=>(setNextPage(nextPage-1))} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-l hover:bg-orange-600 ${nextPage<=1?"hidden":""}`}>
            <AiOutlineBackward/>
          </button>
          <button onClick={e=>(setNextPage(nextPage+1))} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border-0 border-l border-gray-700 rounded-r hover:bg-orange-600">
            <AiFillForward/> 
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
