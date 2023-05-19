import "./styles/App.css";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Recom from "./components/recomendation";

function App() {
  return (
    <div className="backGround">
      <Navbar />
      <div className="container">
        <Welcome />
        <Recom />
      </div>
    </div>
  );
}

export default App;
