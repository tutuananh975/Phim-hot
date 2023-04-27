import React from "react";

const ProductList = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {data?.map((data) => (
          <div className="p-4 cursor-pointer hover:bg-gray-800" key={data._id}>
            <div
              style={{
                width: 200,
                height: 200,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={`https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`}
                alt=""
                className="rounded-lg"
                style={{
                  width: 200,
                  height: 300,
                }}
              />
            </div>
            <div className="text-xl font-medium font-mono text-center mt-3">
              {data.name}
            </div>
            <div className="text-center font-medium text-gray-300 font-serif">
              {data.englishName}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
