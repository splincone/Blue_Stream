import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetcher from "../../fetcher";
import styles from "./Details.module.css";
const API_Image = "https://image.tmdb.org/t/p/w500/";

export default function Details() {
  const { id, type, title } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const newData = await fetcher
      .fetcherDetails(id, type)
      .then((response) => response);
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.impostazione}>
        <img
          className={styles.immagine}
          src={API_Image + data.poster_path}
          alt="immagine"
        />
        <div className={styles.container2}>
          <div className={styles.titolo}>{data.title}</div>
          <div className={styles.scritte}>
            <b>RELEASE DATE: </b>
            <p>{data.release_date}</p>
          </div>
          <div className={styles.scritte}>
            <b>ORIGINAL LANGUAGE:</b> <p>{data.original_language}</p>
          </div>
          <div className={styles.scritte}>
            <b>PLOT:</b> <div>{data.overview}</div>
          </div>
          <a className={styles.guarda} href={data.homepage}>
            WATCH
          </a>
        </div>
      </div>
    </div>
  );
}
