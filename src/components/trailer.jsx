import "../styles/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Trailer() {
  return (
    <div className="horizontal-scroller">
      <Swiper modules={[Scrollbar]} slidesPerView={3} scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <img src="path/to/image1.jpg" alt="Trailer 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="path/to/image2.jpg" alt="Trailer 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="path/to/image3.jpg" alt="Trailer 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="path/to/image3.jpg" alt="Trailer 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="path/to/image3.jpg" alt="Trailer 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="path/to/image3.jpg" alt="Trailer 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Trailer;
