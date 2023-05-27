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
              <a onClick={() => {
                navigate("/serial")
              }}>Serial TV</a>
            </li>
            <li className="navbar-item">
              <a onClick={() => {
                navigate("/film")
              }}>Film</a>
            </li>
            <li className="navbar-item">
              <a onClick={toggleGenreDropdown}>
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
            <a onClick={() => {
                navigate("/genre", {state: 28});
              }}>Aksi</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 12});
              }}>Petualangan</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 16});
              }}>Animasi</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 35});
              }}>Komedi</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 80});
              }}>Kejahatan</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 99});
              }}>Dokumenter</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 18});
              }}>Drama</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 10751});
              }}>Keluarga</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 14});
              }}>Fantasi</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 36});
              }}>Sejarah</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 27});
              }}>Horor</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 10402});
              }}>Musik</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 9648});
              }}>Misteri</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 10749});
              }}>Romansa</a>
          </li>
          <li>
            <a onClick={() => {
                navigate("/genre", {state: 878});
              }}>Fiksi Ilmiah</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
