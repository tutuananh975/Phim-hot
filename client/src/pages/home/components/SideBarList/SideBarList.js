import React from "react";

const SideBarList = ({ data }) => {
  return (
    <>
      <div>
        {data?.map((data,index) => (
          <div className={`flex my-2 ${index %2 ===0 ? 'bg-gray-800' : ''}`} key={data.id}>
            <img src={data.avatar} alt="" className="w-14 h-14 my-auto" />
            <div className="ml-2">
              <div className="text-sm font-semibold font-mono text-center mt-2 px-2">
                {data.name}
              </div>
              <div className="text-center font-medium text-gray-300 font-serif text-xs">
                {data.englishName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarList;
