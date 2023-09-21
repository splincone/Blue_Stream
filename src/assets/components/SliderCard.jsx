import React from "react";
import { Link } from "react-router-dom";
const API_Image = "https://image.tmdb.org/t/p/w500/";
export default function SliderCard({element, type, title}) {
  return (
    <Link className="sliderCard" to={`/details/${type}/${element.id}/${title}`}>
      <div className="cardImage"><img src={API_Image + element.poster_path} alt="image" /></div>
    </Link>
  );
}
