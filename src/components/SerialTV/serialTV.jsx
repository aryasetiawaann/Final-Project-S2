import "./serialTV.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function SerialTV() {
  const [series, setSeries] = useState([]);

  const value = Math.floor(Math.random() * 5) + 1;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "tv.desc",
          page: value,
        },
      })
      .then((response) => {
        console.log("Throwback => ", response.data.results);
        setSeries(response.data.results);
      });
  }, []);

  const filteredSeries = series.filter((series) => series.origin_country.includes("ID") && series.poster_path);

  return (
    <div className="throwback">
      <h3>Serial TV</h3>
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
        {filteredSeries.map((result, index) => (
          <SwiperSlide className="throwback-items" key={index}>
            <button>
              {result.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.name} />}
              <p>{result.name}</p>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SerialTV;
