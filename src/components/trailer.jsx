import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState, useRef } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Trailer() {
  const [movies, getMovies] = useState([]);
  const [trailer, getTrailer] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const modalRef = useRef(null);

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
    movies.forEach((result) => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/movie/${result.id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
            append_to_response: "videos",
          },
        })
        .then((response) => {
          if (response.data.videos.results.length > 0) {
            const trailerKey = response.data.videos.results[0].key;
            getTrailer((prevTrailer) => [...prevTrailer, { movieId: result.id, trailerKey: trailerKey }]);
          }
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    });
  }, [movies]);

  const closeModal = () => {
    setSelectedTrailer(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div>
      <Swiper
        modules={[Scrollbar]}
        slidesPerView={3.5}
        scrollbar={{ draggable: true }}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {movies.map((result) => {
          const movieTrailer = trailer.find((item) => item.movieId === result.id);

          if (result.backdrop_path != null) {
            return (
              <SwiperSlide key={result.id} className="trailer-items" style={{ margin: "5px" }}>
                <img
                  onClick={() => {
                    if (movieTrailer) {
                      setSelectedTrailer(movieTrailer.trailerKey);
                    } else {
                      setSelectedTrailer("none");
                    }
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                  alt={result.title}
                />
                <p style={{ paddingBottom: "25px" }}>{result.title}</p>
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
      {}
      {selectedTrailer && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal-content" ref={modalRef}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe className="youtube-trailer" src={`https://www.youtube.com/embed/${selectedTrailer}`} title="YouTube Trailer" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailer;
