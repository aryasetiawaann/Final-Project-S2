import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate("/Search", { state: `${search}` });
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
              <a
                onClick={() => {
                  navigate("/serial");
                }}
              >
                Serial TV
              </a>
            </li>
            <li className="navbar-item">
              <a
                onClick={() => {
                  navigate("/film");
                }}
              >
                Film
              </a>
            </li>
            <li className="navbar-item">
              <a onClick={toggleGenreDropdown}>Genre</a>
            </li>
          </ul>
        </div>
        <div className="navbar-menu">
          <li className="search">
            <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Cari Film..." />
          </li>
        </div>
      </nav>
      {isGenreOpen && (
        <ul className={"genre-dropdown"}>
          <li
            onClick={() => {
              navigate("/genre", { state: 28 });
            }}
          >
            <a>Aksi</a>
          </li>
          <li  onClick={() => {
                navigate("/genre", { state: 12 });
              }}>
            <a
            >
              Petualangan
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 16 });
              }}>
            <a
              
            >
              Animasi
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 35 });
              }}>
            <a
              
            >
              Komedi
            </a>
          </li>
          <li  onClick={() => {
                navigate("/genre", { state: 80 });
              }}>
            <a
             
            >
              Kejahatan
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 99 });
              }}>
            <a
              
            >
              Dokumenter
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 18 });
              }}>
            <a
              
            >
              Drama
            </a>
          </li>
          <li  onClick={() => {
                navigate("/genre", { state: 10751 });
              }}>
            <a
             
            >
              Keluarga
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 14 });
              }}>
            <a
              
            >
              Fantasi
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 36 });
              }}>
            <a
              
            >
              Sejarah
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 27 });
              }}>
            <a
              
            >
              Horor
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 10402 });
              }}>
            <a
              
            >
              Musik
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 9648 });
              }}>
            <a
              
            >
              Misteri
            </a>
          </li>
          <li onClick={() => {
                navigate("/genre", { state: 10749 });
              }}>
            <a
              
            >
              Romansa
            </a>
          </li>
          <li  onClick={() => {
                navigate("/genre", { state: 878 });
              }}>
            <a
             
            >
              Fiksi Ilmiah
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
