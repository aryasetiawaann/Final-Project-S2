import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";

function Recom() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 100) + 1;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "popularity.desc",
          page: randomPage,
        },
      })
      .then((response) => {
        const filteredMovies = response.data.results.filter(
          (movie) => movie.poster_path
        );
        setMovies(filteredMovies);
      });
  }, []);

  return (
    <div className="recommendation">
      <h3>Rekomendasi</h3>
      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        navigation
        style={{
          "--swiper-navigation-color": "#ffff",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        {movies.map((result, index) => {
          return (
            <SwiperSlide className="recom-items" key={index}>
              <Link to={`/movie/${result.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.title}
                />
                <p>{result.title}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Recom;
