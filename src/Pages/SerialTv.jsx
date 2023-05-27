import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/moviedetail.css";
import Navbar from "../components/navbar";
import CastCard from "../components/castcard";
import Footer from "../components/Footer/footer";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [overview, setOverview] = useState(null);

  const location = useLocation();
  const movieId = location?.state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/tv/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
        },
      })
      .then((response) => {
        setOverview(response.data);
      });
  }, [movieId]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/tv/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          append_to_response: "credits,videos",
        },
      })
      .then((response) => {
        setMovie(response.data);
      });
  }, [movieId]);

  if (!movie || !overview) {
    return <div>Loading...</div>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const trailerUrl = movie.videos.results.length > 0 ? `https://www.youtube.com/embed/${movie.videos.results[0].key}` : null;

  const castWithPhotos = movie.credits.cast.filter((cast) => cast.profile_path);
  const castWithoutPhotos = movie.credits.cast.filter((cast) => !cast.profile_path);
  const sortedCast = [...castWithPhotos, ...castWithoutPhotos];

  return (
    <div>
      <Navbar />
      <div className="movie-info-container">
        <div className="poster">
          <img src={posterUrl} alt={overview?.name} />
        </div>
        <div className="movie-details">
          <h2>{overview?.name}</h2>
          <p>Release Date: {overview?.first_air_date}</p>
          <p>Rating: {overview?.vote_average}</p>
          <div className="overview">
            <h4>Overview:</h4>
            <p>{overview?.overview}</p>
          </div>
        </div>
      </div>
      {trailerUrl && (
        <div className="trailer-container">
          <iframe className="youtube-trailer" src={trailerUrl} allowFullScreen></iframe>
        </div>
      )}
      {!trailerUrl && <p style={{textAlign: "center", fontWeight: "bolder", fontSize: "30px"}}>Cuplikan tidak tersedia</p>}
      <div className="cast-section">
        <h4>Cast:</h4>
        <div className="cast-container">
          {sortedCast.slice(0, 20).map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetail;
