import "./throwback.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Recom() {
  const [movies, getMovies] = useState([]);

  const value = Math.floor(Math.random() * 5) + 1;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "popularity.desc",
          "primary_release_date.gte": "1990-01-01",
          "primary_release_date.lte": "2010-12-31",
          page: value,
        },
      })
      .then((response) => {
        console.log("Throwback => ", response.data.results);
        getMovies(response.data.results);
      });
  }, []);

  return (
    <div className="throwback">
      <h3>Nostalgia</h3>
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
            <SwiperSlide className="throwback-items" key={index}>
              <button>
                <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />
                <p>{result.title}</p>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Recom;
