import React from "react";

const SideBarList = ({ data }) => {
  return (
    <>
      <div>
        {data.map((data) => (
          <div className={`flex my-2 ${data.id %2 ===0 ? 'bg-orange-900' : ''}`} key={data.id}>
            <img src={data.img} alt="" className="w-14 h-14" />
            <div className="ml-2">
              <div className="text-sm font-semibold font-serif text-center mt-2 px-2">
                {data.name}
              </div>
              <div className="text-center font-medium text-gray-300 font-serif">
                {data.nameEng}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarList;
