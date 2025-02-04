import { useState, useEffect } from "react";
import axios from "../../API/axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import "./Banner.css";

// `/discover/tv?api_key=${
//     import.meta.env.VITE_API_KEY
//   }&with_networks=213`

function Banner() {
  const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        position: "relative",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">
            <PlayArrowIcon />
            Play
          </button>
          <button className="banner-button info">
            <InfoIcon />
            More Information
          </button>
        </div>
        <h1 className="banner-desc"> {truncate(movie?.overview, 150)} </h1>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
