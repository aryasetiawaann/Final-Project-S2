import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";

export default function NFilm() {
  const location = useLocation();
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
          page: page,
        },
      })
      .then((response) => {
        const filteredMovies = response.data.results.filter((movie) => movie.poster_path);
        setMovies(filteredMovies);
        scrollToTop();
      });
  }, [page]);




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
      <div style={{minHeight: "100vh"}}>
      <h1>TEST</h1>
      <div>
        {movies.map((result, index) => {
          return (
            <div key={index}>
                <img onClick={() => {
                navigate("/movie", {state: result.id});
              }} src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}/>
              <h1>{result.title}</h1>
            </div>
          );
        })}
      </div>
      <button onClick={decrease}>Prev</button>
      <button onClick={increase}>Next</button>
      </div>
      <Footer/>
    </div>
  );
}
