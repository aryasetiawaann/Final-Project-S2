import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"

function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate("/Search", {state: `${search}`});
    }
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="logo">
            <a onClick={() => navigate("/")}>
              <h1>matara</h1>
            </a>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a onClick={() => navigate("/SerialTV")}>Serial TV</a>
            </li>
            <li className="navbar-item">
              <a onClick={() => navigate("/Film")}>Film</a>
            </li>
            <li className="navbar-item">
              <a href="#" onClick={toggleGenreDropdown}>
                Genre
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-menu">
            <li className="search navbar-item">
              <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Cari Film..." />
            </li>
          </ul>
        </div>
      </nav>
      {isGenreOpen && (
        <ul className={"genre-dropdown"}>
          <li>
            <a onClick={() => navigate("/Aksi")}>Aksi</a>
          </li>
          <li>
            <a onClick={() => navigate("/Petualangan")}>Petualangan</a>
          </li>
          <li>
            <a onClick={() => navigate("/Animasi")}>Animasi</a>
          </li>
          <li>
            <a onClick={() => navigate("/Komedi")}>Komedi</a>
          </li>
          <li>
            <a onClick={() => navigate("/Kejahatan")}>Kejahatan</a>
          </li>
          <li>
            <a onClick={() => navigate("/Dokumenter")}>Dokumenter</a>
          </li>
          <li>
            <a onClick={() => navigate("/Drama")}>Drama</a>
          </li>
          <li>
            <a onClick={() => navigate("/Keluarga")}>Keluarga</a>
          </li>
          <li>
            <a onClick={() => navigate("/Fantasi")}>Fantasi</a>
          </li>
          <li>
            <a onClick={() => navigate("/Sejarah")}>Sejarah</a>
          </li>
          <li>
            <a onClick={() => navigate("/Horor")}>Horor</a>
          </li>
          <li>
            <a onClick={() => navigate("/Musik")}>Musik</a>
          </li>
          <li>
            <a onClick={() => navigate("/Misteri")}>Misteri</a>
          </li>
          <li>
            <a onClick={() => navigate("/Romansa")}>Romansa</a>
          </li>
          <li>
            <a onClick={() => navigate("/FiksiIlmiah")}>Fiksi Ilmiah</a>
          </li>
          <li>
            <a onClick={() => navigate("/FilmTv")}>Film TV</a>
          </li>
          <li>
            <a onClick={() => navigate("/Thriller")}>Thriller</a>
          </li>
          <li>
            <a onClick={() => navigate("/Perang")}>Perang</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
