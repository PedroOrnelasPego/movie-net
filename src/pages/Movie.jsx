import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./Movie.scss";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?&language=pt-BR&${apiKey}`;
    getMovie(movieUrl);
  }, []);

  console.log(id);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <div className="info-description">
              <h3>Orçamento:</h3>
              <p>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="info-description">
              <h3>Duração:</h3>
              <p>{movie.runtime}min</p>
            </div>
            <div className="info-description">
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
