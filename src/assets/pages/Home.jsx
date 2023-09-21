import { useEffect, useState } from "react";
import fetcher from "../../fetcher";
import Card from "../components/Card";
import Slider from "../components/Slider";
import styles from "./Home.module.css";

export default function Home() {
  const [upComingMovie, setUpComingMovie] = useState();
  const [topRatedSeries, setTopRatedSeries] = useState();
  const getData = async () => {
    const newUpcoming = await fetcher.default("movie/upcoming").then(
      (response) => response
    );
    const newTopRated = await fetcher.default("tv/top_rated").then(
      (response) => response
    );
    setUpComingMovie(newUpcoming.results);
    setTopRatedSeries(newTopRated.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <h2>Upcoming Movies</h2>
      <Slider data={upComingMovie} type="movie" title="title"/>
      <h2>Top rated Series</h2>
      <Slider data={topRatedSeries} type="tv" title="name"/>
    </div>
  );
}
