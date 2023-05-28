import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import "../styles/search.css";

export default function Search() {
  let location = useLocation();
  const [search, getSearch] = useState(location?.state);
  const [movies, getMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== "") {
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

  if (location?.state !== search) {
    setSearch();
  }

  return (
    <div>
      <Navbar />
      <div className="container1" style={{ minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(61, 36, 6, 0.441)", width: "40%", borderRadius: "10px", margin: "0 auto 20px auto" }}>Hasil Pencarian</h1>
        <div className="serial-items">
          {movies.length === 0 && <p className="no-poster-message">Film tidak tersedia</p>}
          {movies.map((result, index) => {
            if (result.original_language === "id") {
              return (
                <div key={index} className="serial-item">
                  {result.poster_path ? (
                    <img
                      onClick={() => {
                        if (result.media_type === "tv") {
                          navigate("/serialtv", { state: result.id });
                        } else if (result.media_type === "movie") {
                          navigate("/movie", { state: result.id });
                        }
                      }}
                      src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                      alt={result.title}
                      className="poster1"
                    />
                  ) : (
                    <div className="not-found">
                      <p>Gambar tidak tersedia</p>
                    </div>
                  )}
                  <h1 className="title">{result.title ? result.title : result.name}</h1>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
