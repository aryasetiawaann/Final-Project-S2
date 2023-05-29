import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Recom from "../components/recomendation";
import Trailer from "../components/trailer";
import GlassmorphicContainer from "../components/glassmorph";
import Slideshow from "../components/slideshow";
import Throwback from "../components/throwback/throwback";
import Footer from "../components/Footer/footer";
import RingLoader from "react-spinners/RingLoader";
import SerialTV from "../components/SerialTV/serialTV";

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="backGround1" style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ position: "absolute", marginLeft: "18px", marginTop: "10px", zIndex: 1, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>MATARA</h1>
          <RingLoader color={"#FFD95A"} loading={loading} size={250} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      </div>
    );
  }

  return (
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
      <Footer />
    </div>
  );
}
