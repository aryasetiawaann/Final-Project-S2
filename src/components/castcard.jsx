import React from "react";
import "../styles/castcard.css"

const CastCard = ({ cast }) => {
  const profileUrl = `https://image.tmdb.org/t/p/w200${cast.profile_path}`;
  const fallbackText = "Gambar Tidak Tersedia";

  return (
    <div className="cast-card">
      <div className="cast-image">
        {cast.profile_path ? (
          <img src={profileUrl} alt={cast.name} />
        ) : (
          <span>{fallbackText}</span>
        )}
      </div>
      <div className="cast-name">{cast.name}</div>
    </div>
  );
};

export default CastCard;
