import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/moviedetail.css";
import Navbar from "./navbar";
import Footer from "./Footer/footer";

function MovieDetail() {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const movieId = location?.state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          append_to_response: "credits",
        },
      })
      .then((response) => {
        setMovie(response.data);
      });
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mdetail-container">
      <Navbar />
      <div className="movie-detail">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <h4>Cast:</h4>
          <ul className="cast-list">
            {movie.credits.cast.map((cast) => (
              <li key={cast.id}>
                <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
                <span>{cast.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MovieDetail;
