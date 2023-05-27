import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer/footer";

function MovieDetail() {
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const movieId = location?.state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/tv/${movieId}`, {
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
    <div>
      <Navbar />
      <div style={{minHeight: "100vh"}}>
        <h2>{movie.name}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.first_air_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <h4>Cast:</h4>
        <ul>
          {movie.credits.cast.map((cast) => (
            <li key={cast.id}>{cast.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetail;
