import "./throwback.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { format } from "date-fns";
import Wayang from "../../assets/wayang1.png";

function Recom() {
  const [movies, getMovies] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(6);

  const value = Math.floor(Math.random() * 10) + 1;
  const navigate = useNavigate();
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
        getMovies(response.data.results);
      });
  }, [value]);

  const filteredMovies = movies.filter((movies) => movies.poster_path);

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

    if (filteredMovies.length === 2) {
      setSlidesPerView("auto");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredMovies.length]);

  return (
    <div className="throwback">
      <h3>Nostalgia</h3>
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
        {movies.map((result, index) => {
          const releaseDate = new Date(result.release_date);
          const formattedDate = format(releaseDate, "MMM d, yyyy");

          return (
            <SwiperSlide className="throwback-items" key={index}>
              <button>
                {result.poster_path ? (
                  <img
                    onClick={() => {
                      navigate("/movie", { state: result.id });
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                    alt={result.title}
                  />
                ) : (
                  <div
                    onClick={() => {
                      navigate("/movie", { state: result.id });
                    }}
                    className="not-found-home"
                  >
                    <img src={Wayang} alt="Wayang" />
                  </div>
                )}
              </button>
              <h4>{result.title}</h4>
              <p>{formattedDate}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Recom;
