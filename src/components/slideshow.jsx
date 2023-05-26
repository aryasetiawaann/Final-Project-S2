import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import "../styles/slideshow.css"; 

SwiperCore.use([Autoplay, Pagination]);

function Slideshow() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "top_rated.desc",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  const filteredMovies = movies.filter((movie) => movie.backdrop_path && movie.overview).slice(0, 4);
  
  return (
    <div className="slideshow-container">
      <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 3000, disableOnInteraction: false }}>
        {filteredMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="slideshow-item">
              <div
                className="slideshow-backdrop"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                }}
              ></div>
              <div className="slideshow-content">
                <div className="slideshow-poster-container">
                  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="slideshow-poster" />
                </div>
                <div className="slideshow-info">
                  <h2 className="slideshow-title">{movie.title}</h2>
                  <p className="slideshow-rate">Penilaian: ★{movie.vote_average}</p>
                  <p className="slideshow-overview">{movie.overview}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slideshow;
