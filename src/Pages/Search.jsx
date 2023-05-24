import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";

export default function Search() {
  let location = useLocation();
  const [search, getSearch] = useState(location?.state);
  const [movies, getMovies] = useState([]);
  useEffect(() => {
    if (search != "") {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/search/multi`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            language: "id-ID",
            query: search,
          },
        })
        .then((response) => {
          getMovies(response.data.results);
        });
    }
  }, [search]);

  const setSearch = () => {
    getSearch(location?.state);
  };

  if (location?.state != search) {
    setSearch();
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>SEARCH</h1>
        <div className="item-list">
          {movies.map((result, index) => {
            if (result.original_language === "id") {
              return (
                <div key={index} className="item">
                  <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                  <h1>{result.title ? result.title : result.name}</h1>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
