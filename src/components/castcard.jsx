import React from "react";
import "../styles/castcard.css";
import Wayang from "../assets/wayang1.png";

const CastCard = ({ cast }) => {
  const profileUrl = `https://image.tmdb.org/t/p/w200${cast.profile_path}`;

  return (
    <div className="cast-card">
      <div className="cast-image">{cast.profile_path ? <img src={profileUrl} alt={cast.name} /> : <img src={Wayang} alt="Wayang" />}</div>
      <div className="cast-name">{cast.name}</div>
    </div>
  );
};

export default CastCard;
