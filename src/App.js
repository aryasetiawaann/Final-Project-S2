import "./styles/App.css";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Recom from "./components/recomendation";
import Trailer from "./components/trailer";
import GlassmorphicContainer from "./components/glassmorph";
import Slideshow from "./components/slideshow";
import Throwback from "./components/throwback/throwback";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <div className="backGround">
        <Navbar />
        <Slideshow />
        <div className="container">
          <Recom />
          <GlassmorphicContainer>
            <Trailer />
          </GlassmorphicContainer>
          <Throwback />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
