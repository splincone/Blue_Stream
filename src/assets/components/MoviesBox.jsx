import styles from "./MoviesBox.module.css";
import { useEffect, useState } from "react";
import fetcher from "../../fetcher";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

export default function MoviesBox({ url, title, type }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("keyWord") || "");
  
  const getData = async () => {
    const newData = await fetcher
      .default(url, page)
      .then((response) => response);
    setData([...data, ...newData.results]);
  };

  const getSearchData = async () => {
    const newData = await fetcher
      .search(type, query, page)
      .then((response) => response);
    if (page === 1) {
      setData(newData.results);
    } else {
      setData([...data, ...newData.results]);
    }
  };

  useEffect(() => {
    if (query !== "") {
      getSearchData();
    } else {
      getData();
    }
  }, [page]);

  const handleLoad = () => {
    setPage(page + 1);
  };
  console.log(data);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ keyWord: query });
    getSearchData();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.c}>
        <input
          type="text"
          className={styles.ricerca}
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.lente}>
          🔍
        </button>
      </form>
      <div className={styles.cardsGrid}>
        {data?.map((item, index) => {
          return <Card element={item} key={index} title={title} type={type} />;
        })}
      </div>
      <button className={styles.loadButton} onClick={handleLoad}>
        Load more
      </button>
    </div>
  );
}
