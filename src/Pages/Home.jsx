import React, { useState } from "react";
import MovieList from "../Components/MovieList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=YOUR_ACTUAL_API_KEY`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={searchMovies} className="mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
