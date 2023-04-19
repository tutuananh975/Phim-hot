import React from "react";


const ProductList = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {data.map((data) => (
          <div className="p-4" key={data.id}>
            <img src={data.img} alt="" className="rounded-lg" />
            <div className="text-xl font-medium font-serif text-center mt-3">
              {data.name}
            </div>
            <div className="text-center font-medium text-gray-300 font-serif">
              {data.nameEng}
            </div>
          </div>
        )
        )}
      </div>
    </>
  );
};

export default ProductList;
