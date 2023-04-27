import { settings } from "./ConfigSlider";
import React from "react";
import Slider from "react-slick";

const SlickSlide = ({ data }) => {
  return (
    <>
      <div className="lg:w-11/12 w-10/12 mx-auto">
        <Slider {...settings}>
          {data?.map((data) => (
            <div className="p-4 cursor-pointer hover:bg-gray-800" key={data._id}>
              <img src={data.avatar} alt="" className="rounded-lg h-64 w-full max-sm:h-40"/>
              <div className="text-xl font-medium font-mono text-center mt-3">
                {data.name}
              </div>
              <div className="text-center font-medium text-gray-300 font-serif">
                {data.englishName}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlickSlide;
