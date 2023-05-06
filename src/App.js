import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const Search = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/search/multi`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        })
        .then((response) => {
          console.log("datas => ", response);
        });
    }, []);
  };
  return (
    <div>
      <Search />
      <h1>TEST</h1>
    </div>
  );
}

export default App;
