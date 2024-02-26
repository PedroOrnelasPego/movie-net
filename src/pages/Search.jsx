import { useSearchParams } from "react-router-dom";
import "./MoviesGrid.scss";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);

  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueyURL = `${searchUrl}?&language=pt-BR&${apiKey}&query=${query}`;

    getSearchMovies(searchWithQueyURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Resultados para: {query}</h2>
      <div className="movies-container">
        {movies.length === 0 && <p>carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
