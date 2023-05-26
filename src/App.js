import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./Pages/Homepage";
import SerialTV from "./Pages/SerialTv";
import Film from "./Pages/Film";
import Search from "./Pages/Search";
import About from "./Pages/About";
import Aksi from "./Pages/Genres/Aksi";
import Animasi from "./Pages/Genres/Animasi";
import Dokumenter from "./Pages/Genres/Dokumenter";
import Drama from "./Pages/Genres/Drama";
import Fantasi from "./Pages/Genres/Fantasi";
import Fiksi from "./Pages/Genres/FiksiIlmiah";
import Horor from "./Pages/Genres/Horor";
import Kejahatan from "./Pages/Genres/Kejahatan";
import Keluarga from "./Pages/Genres/Keluarga";
import Komedi from "./Pages/Genres/Komedi";
import Misteri from "./Pages/Genres/Misteri";
import Musik from "./Pages/Genres/Musik";
import Perang from "./Pages/Genres/Perang";
import Petualangan from "./Pages/Genres/Petualangan";
import Romansa from "./Pages/Genres/Romansa";
import Sejarah from "./Pages/Genres/Sejarah";
import Thriller from "./Pages/Genres/Thriller";
import FilmTV from "./Pages/Genres/FilmTv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/SerialTV" element={<SerialTV/>}/>
        <Route path="/Film" element={<Film/>}/>
        <Route path="/Genre" element={<Homepage/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Aksi" element={<Aksi/>}/>
        <Route path="/Animasi" element={<Animasi/>}/>
        <Route path="/Dokumenter" element={<Dokumenter/>}/>
        <Route path="/Drama" element={<Drama/>}/>
        <Route path="/Fantasi" element={<Fantasi/>}/>
        <Route path="/FiksiIlmiah" element={<Fiksi/>}/>
        <Route path="/FilmTv" element={<FilmTV/>}/>
        <Route path="/Horor" element={<Horor/>}/>
        <Route path="/Kejahatan" element={<Kejahatan/>}/>
        <Route path="/Keluarga" element={<Keluarga/>}/>
        <Route path="/Komedi" element={<Komedi/>}/>
        <Route path="/Misteri" element={<Misteri/>}/>
        <Route path="/Musik" element={<Musik/>}/>
        <Route path="/Perang" element={<Perang/>}/>
        <Route path="/Petualangan" element={<Petualangan/>}/>
        <Route path="/Romansa" element={<Romansa/>}/>
        <Route path="/Sejarah" element={<Sejarah/>}/>
        <Route path="/Thriller" element={<Thriller/>}/>
      </Routes>
    </Router>
    
  
  );
}

export default App;
