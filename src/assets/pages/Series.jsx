import MoviesBox from "../components/MoviesBox";
import styles from "./Series.module.css";

export default function Series() {
  return (
    <div className={styles.container}>
      <h1>SERIES</h1>
      <MoviesBox url="tv/popular" title="name" type="tv"/>
    </div>
  );
}
