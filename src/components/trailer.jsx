import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Trailer() {
  const [movies, getMovies] = useState([]);
  const [trailer, getTrailer] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "popularity.desc",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        getMovies(response.data.results);
      });
  }, []);

  useEffect(() => {
    movies.map((result) => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/movie/${result.id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            append_to_response: "videos",
          },
        })
        .then((response) => {
          console.log(response.data.videos.results[0]);
          getTrailer((trailer) => [...trailer, response.data.videos.results[0]]);
        });
    });
  }, [movies]);


  return (
    <Swiper modules={[Scrollbar]} slidesPerView={3.5} scrollbar={{ draggable: true }} style={{ display: "flex", justifyContent: "space-evenly" }}>
      {movies.map((result, index) => {
        if (result.backdrop_path != null) {
          return (
            <SwiperSlide key={index} className="trailer-items" style={{ margin: "5px" }}>
              <img
                onClick={() => {
                  console.log(trailer[index].key);
                }}
                src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                alt={result.title}
              />
              <p style={{ paddingBottom: "25px" }}>{result.title}</p>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}

export default Trailer;
