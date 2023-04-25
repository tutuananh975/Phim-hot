import React from "react";


const ProductList = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {data?.map((data) => (
          <div className="p-4" key={data._id}>
            <img src={data.avatar} alt="" className="rounded-lg h-64 w-full" />
            <div className="text-xl font-medium font-mono text-center mt-3 h-20">
              {data.name}
            </div>
            <div className="text-center font-medium text-gray-300 font-serif">
              {data.englishName}
            </div>
          </div>
        )
        )}
      </div>
    </>
  );
};

export default ProductList;
