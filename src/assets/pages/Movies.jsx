import MoviesBox from "../components/MoviesBox";
import styles from "./Movies.module.css";

export default function Movies() {
  return (
    <div className={styles.container}>
      <h1>MOVIES</h1>
      <MoviesBox url="movie/popular" title="title" type="movie"/>
    </div>
  );
}
