import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./serialTV.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Wayang from "../../assets/wayang1.png";

function SerialTV() {
  const [series, setSeries] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(6);

  const value = Math.floor(Math.random() * 5) + 1;
  const navigate = useNavigate();

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
        setSeries(response.data.results);
      });
  }, []);

  const filteredSeries = series.filter((series) => series.origin_country.includes("ID") && series.poster_path);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 545) {
        setSlidesPerView(2);
      } else if (windowWidth <= 900) {
        setSlidesPerView(3);
      } else if (windowWidth <= 1200) {
        setSlidesPerView(4);
      } else if (windowWidth <= 1400) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(6);
      }
    };

    if (filteredSeries.length === 2) {
      setSlidesPerView("auto");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredSeries.length]);

  return (
    <div className="serialtv">
      <h3>Serial TV</h3>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        navigation
        style={{
          "--swiper-navigation-color": "#ffff",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        {filteredSeries.map((result, index) => (
          <SwiperSlide className="serialtv-items" key={index}>
            <button>
              {result.poster_path ? (
                <img
                  onClick={() => {
                    navigate("/serialtv", { state: result.id });
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.title}
                />
              ) : (
                <div
                  onClick={() => {
                    navigate("/serialtv", { state: result.id });
                  }}
                  className="not-found-home"
                >
                  <img src={Wayang} alt="Wayang" />
                </div>
              )}
              <h4>{result.name}</h4>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SerialTV;
