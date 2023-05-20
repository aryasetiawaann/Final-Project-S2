import "./styles/App.css";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Recom from "./components/recomendation";
import Trailer from "./components/trailer";
import GlassmorphicContainer from "./components/glassmorph";

function App() {
  return (
    <div className="backGround">
      <Navbar />
      <div className="container">
        <Welcome />
        <Recom />
        <GlassmorphicContainer>
          <Trailer />
        </GlassmorphicContainer>
      </div>
    </div>
  );
}

export default App;
