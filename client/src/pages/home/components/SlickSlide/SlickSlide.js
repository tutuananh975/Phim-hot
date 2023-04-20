import { settings } from "./ConfigSlider";
import React from "react";
import Slider from "react-slick";

const SlickSlide = ({ data }) => {
  return (
    <>
      <div className="lg:w-11/12 w-10/12 mx-auto">
        <Slider {...settings}>
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
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlickSlide;
