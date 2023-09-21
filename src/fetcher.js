const fetcher = {
  default: (url, page = 1) => {
    return fetch(
      "https://api.themoviedb.org/3/" +
        url +
        "?api_key=6f9286d54de4891ea7a5c91779e09786&page=" +
        page
    )
      .then((res) => res.json())
      .catch(console.error);
  },

  fetcherDetails: (id, type) => {
    return fetch(
      "https://api.themoviedb.org/3/" +
        type +
        "/" +
        id +
        "?api_key=6f9286d54de4891ea7a5c91779e09786"
    )
      .then((res) => res.json())
      .catch(console.error);
  },

  search: (type, keyWord, page) => {
    return fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=6f9286d54de4891ea7a5c91779e09786&query=${keyWord}&page=${page}`
    )
      .then((res) => res.json())
      .catch(console.error);
  },
};
export default fetcher;
