import React, { useState } from "react";

function Navbar() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="logo">
            <a href="#">
              {/* <img src="" /> */}
              <h1>matara</h1>
            </a>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#">Serial TV</a>
            </li>
            <li className="navbar-item">
              <a href="#">Film</a>
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
              <input type="text" placeholder="Cari Film..." />
            </li>
          </ul>
        </div>
      </nav>
      {isGenreOpen && (
        <ul className={"genre-dropdown"}>
          <li>
            <a href="#">Aksi</a>
          </li>
          <li>
            <a href="#">Petualangan</a>
          </li>
          <li>
            <a href="#">Animasi</a>
          </li>
          <li>
            <a href="#">Komedi</a>
          </li>
          <li>
            <a href="#">Kejahatan</a>
          </li>
          <li>
            <a href="#">Dokumenter</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Keluarga</a>
          </li>
          <li>
            <a href="#">Fantasi</a>
          </li>
          <li>
            <a href="#">Sejarah</a>
          </li>
          <li>
            <a href="#">Horor</a>
          </li>
          <li>
            <a href="#">Musik</a>
          </li>
          <li>
            <a href="#">Misteri</a>
          </li>
          <li>
            <a href="#">Romansa</a>
          </li>
          <li>
            <a href="#">Fiksi Ilmiah</a>
          </li>
          <li>
            <a href="#">Film TV</a>
          </li>
          <li>
            <a href="#">Thriller</a>
          </li>
          <li>
            <a href="#">Perang</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
