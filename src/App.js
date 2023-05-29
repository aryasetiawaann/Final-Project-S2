import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./Pages/Homepage";
import SerialTV from "./Pages/SerialTv";
import Search from "./Pages/Search";
import About from "./Pages/About";
import MovieDetail from "./components/moviedetail";
import Genres from "./Pages/Genres";
import NFilm from "./Pages/Film";
import NSerial from "./Pages/Serial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/serialtv" element={<SerialTV/>}/>
        <Route path="/film" element={<NFilm/>}/>
        <Route path="/serial" element={<NSerial/>}/>
        <Route path="/genre" element={<Genres/>}/>
        <Route path="/movie" element={<MovieDetail/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
    
  
  );
}

export default App;
