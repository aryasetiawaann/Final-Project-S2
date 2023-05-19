import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Recom() {
  const [movies, getMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        getMovies(response.data.results);
      });
  }, []);

  return (
    <div className="recommendation">
      <h3>REKOMENDASI</h3>
      <Swiper modules={[Navigation]} slidesPerView={6} navigation>
        {movies.map((result, index) => {
          return (
            <SwiperSlide className="recom-items" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />
              <p>{result.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Recom;
