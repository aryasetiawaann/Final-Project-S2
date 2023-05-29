import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/moviedetail.css";
import Navbar from "./navbar";
import CastCard from "./castcard";
import Footer from "./Footer/footer";
import Wayang from "../assets/wayang1.png";

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
          language: "id-ID",
        },
      })
      .then((response) => {
        console.log(response.data);
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

  if (!movie || !overview) {
    return <div>Loading...</div>;
  }

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  const trailerUrl = movie.videos.results.length > 0 ? `https://www.youtube.com/embed/${movie.videos.results[0].key}` : null;

  const castWithPhotos = movie.credits.cast.filter((cast) => cast.profile_path);
  const castWithoutPhotos = movie.credits.cast.filter((cast) => !cast.profile_path);
  const sortedCast = [...castWithPhotos, ...castWithoutPhotos];

  return (
    <div>
      <Navbar />
      <div className="movie-info-container">
        <div className="poster">{posterUrl ? <img src={posterUrl} alt={overview?.title} /> : <img src={Wayang} alt="Wayang" />}</div>
        <div className="movie-details">
          <h2>{overview?.title}</h2>
          <p>Release Date: {overview?.release_date}</p>
          <p>★ {overview?.vote_average}</p>
          <div className="overview">
            <h4>Overview:</h4>
            <p>{overview?.overview}</p>
          </div>
        </div>
      </div>
      {trailerUrl && (
        <div className="trailer-container">
          <iframe className="youtube-trailer" src={trailerUrl} title="YouTube Trailer" allowFullScreen></iframe>
        </div>
      )}
      {!trailerUrl && <p>Cuplikan tidak tersedia</p>}
      <div className="cast-section" style={{ minHeight: "40vh" }}>
        <h4>Cast</h4>
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
