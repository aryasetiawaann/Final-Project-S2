import "../styles/App.css";
import "../styles/search.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";
import Wayang from "../assets/wayang1.png";

export default function Genres() {
  const location = useLocation();
  const [genre, getGenre] = useState(location?.state);
  const [movies, setMovies] = useState([]);
  const [page, getPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "popularity.desc",
          with_genres: genre,
          page: page,
        },
      })
      .then((response) => {
        const filteredMovies = response.data.results.filter((movie) => movie.poster_path);
        setMovies(filteredMovies);
        scrollToTop();
      });
  }, [genre , page]);

  const setGenre = () => {
    getGenre(location?.state);
  };

  if (location?.state !== genre) {
    getPage(1);
    setGenre();
  }

  const increase = () => {
    getPage((page) => page + 1);
  };

  const decrease = () => {
    if (page > 1) {
      getPage((page) => page - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(61, 36, 6, 0.441)", width: "30%", borderRadius: "10px", margin: "0 auto" }}>Genre</h2>
      <div className="serial-navbar-container" style={{ minHeight: "100vh" }}>
        <h3>Page - {page}</h3>
        <div className="serial-items">
          {movies.map((result, index) => {
            return (
              <div key={index} className="serial-item">
                {result.poster_path ? (
                  <img alt={result.title}
                    onClick={() => {
                      navigate("/movie", { state: result.id });
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  />
                ) : (
                  <div
                    onClick={() => {
                      navigate("/movie", { state: result.id });
                    }}
                    className="not-found"
                  >
                    <img src={Wayang} alt="Wayang" />
                  </div>
                )}
                <h1>{result.title}</h1>
              </div>
            );
          })}
        </div>
        <div className="pagination-container">
          <button onClick={decrease} className="pagination-button">
            Prev
          </button>
          <button onClick={increase} className="pagination-button">
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
