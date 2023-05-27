import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { format } from "date-fns";
import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";

function Recom() {
  const [movies, setMovies] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const randomPage = Math.floor(Math.random() * 7) + 1;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const navigate = useNavigate();

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          language: "id-ID",
          with_original_language: "id",
          sort_by: "popularity.desc",
          "primary_release_date.gte": `${currentYear - 4}-01-01`,
          "primary_release_date.lte": `${currentYear}-12-31`,
          "vote_average.gte": 7.0,
          page: randomPage,
        },
      })
      .then((response) => {
        const filteredMovies = response.data.results.filter((movie) => movie.poster_path);
        setMovies(filteredMovies);
      });
  }, [currentYear]);

  return (
    <div className="recommendation">
      <h3>Rekomendasi</h3>
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
            <SwiperSlide className="recom-items" key={index}>
              <img
                onClick={() => {
                  navigate("/movie", { state: result.id });
                }}
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt={result.title}
              />
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
