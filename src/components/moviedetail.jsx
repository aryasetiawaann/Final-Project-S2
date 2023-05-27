import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/moviedetail.css";
import Navbar from "./navbar";
import CastCard from "./castcard";
import Footer from "./Footer/footer";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [overview, setOverview] = useState(null);

  const location = useLocation();
  const movieId = location?.state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID"
        },
      })
      .then((response) => {
        console.log(response.data)
        setOverview(response.data);
      });
  }, [movieId]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          append_to_response: "credits,videos",
        },
      })
      .then((response) => {
        setMovie(response.data);
      });
  }, [movieId]);
  
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const trailerUrl =
    movie.videos.results.length > 0
      ? `https://www.youtube.com/embed/${movie.videos.results[0].key}`
      : null;
  
  return (
    <div>
      <Navbar />
      <div className="movie-info-container">
        <div className="poster">
          <img src={posterUrl} alt={overview?.title} />
        </div>
        <div className="movie-details">
          <div className="details-header">
            <h2>{overview?.title}</h2>
            <p>Release Date: {overview?.release_date}</p>
          </div>
          <div className="details-content">
            <div className="rating">
              <p>Rating: {overview?.vote_average}</p>
            </div>
            <div className="overview">
              <h4>Overview:</h4>
              <p>{overview?.overview}</p>
            </div>
          </div>
          {trailerUrl && (
            <div className="trailer-container">
              <iframe
                className="youtube-trailer"
                src={trailerUrl}
                // title="YouTube Trailer"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {!trailerUrl && <p>Cuplikan tidak tersedia</p>}
        </div>
      </div>
      <div className="cast-section">
        <h4>Cast:</h4>
        <div className="cast-container">
          {movie.credits.cast.slice(0, 20).map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
