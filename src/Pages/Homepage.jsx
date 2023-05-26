import Navbar from "../components/navbar";
import Recom from "../components/recomendation";
import Trailer from "../components/trailer";
import GlassmorphicContainer from "../components/glassmorph";
import Slideshow from "../components/slideshow";
import Throwback from "../components/throwback/throwback";
import Footer from "../components/Footer/footer";
import TrailerPopUp from "../components/trailerPopUp";
import SerialTV from "../components/SerialTV/serialTV";

export default function Homepage() {
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
          <SerialTV />
        </div>
      </div>
      <Footer />
    </div>
  );
}
