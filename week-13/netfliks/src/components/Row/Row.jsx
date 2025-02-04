import { useState, useEffect } from "react";
import axios from "../../API/axios.js";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const base_img_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  return (
    <section className="row">
      <h2> {title} </h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div className="row-item-div">
            <img
              className="row-poster"
              src={`${base_img_url}${movie?.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Row;
