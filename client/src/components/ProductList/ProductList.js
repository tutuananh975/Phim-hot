import Link from "next/link";
import React from "react";

const ProductList = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {data?.map((data) => (
          <Link href={'/details/Details'} className="p-4 cursor-pointer hover:bg-gray-800" key={data._id}>
            <img
              src={data.avatar}
              alt=""
              className="rounded-lg"
              style={{
                width: 200,
                height: 280,
              }}
            />
            <div className="text-xl font-medium font-mono text-center mt-3">
              {data.name}
            </div>
            <div className="text-center font-medium text-gray-300 font-serif">
              {data.englishName}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
