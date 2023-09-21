import React from "react";
import SliderCard from "./SliderCard";

export default function Slider({ data, type, title }) {
  const scrollPrevious = (event) => {
    event.target.parentNode.scrollBy({
      left: -240,
      behavior: "smooth",
    });
  };
  const scrollNext = (event) => {
    event.target.parentNode.scrollBy({
        left: 240,
        behavior: "smooth",
      });
  };
  return (
    <div className="sliderContainer" >
      {data?.map((item, index) => {
        return <SliderCard element={item} key={index} type={type} title={title}/>;
      })}
      <button className="leftButton" onClick={scrollPrevious}>
        ⮜
      </button>
      <button className="rightButton" onClick={scrollNext}>
        ⮞
      </button>
    </div>
  );
}
