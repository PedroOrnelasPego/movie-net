import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./MovieCard.scss";

const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imgUrl + movie.poster_path} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <p>{new Date(movie.release_date).getFullYear()}</p>
      </div>

      <p>
        <FaStar /> {movie.vote_average.toFixed(2)}
      </p>
      <div className="details">
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  );
};

export default MovieCard;
