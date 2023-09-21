import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const API_Image = "https://image.tmdb.org/t/p/w500/";
export default function Card({ element, title, type }) {
  return (
    <Link
      className={styles.cardContainer}
      to={`/details/${type}/${element.id}/${title}`}
    >
      <img src={API_Image + element.poster_path} alt="image" />
      <div>{element[title]}</div>
    </Link>
  );
}
