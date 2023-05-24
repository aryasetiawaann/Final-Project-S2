import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./Pages/Homepage";
import SerialTV from "./Pages/SerialTv";
import Film from "./Pages/Film";
import Search from "./Pages/Search";
import About from "./Pages/About";

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
      </Routes>
    </Router>
  
  );
}

export default App;
