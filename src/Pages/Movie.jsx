import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/apikey.aspx?i=${id}&apikey=YOUR_ACTUAL_API_KEY`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
          setError("");
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("An error occurred while fetching data");
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}
      {movie && (
        <div className="flex">
          <img src={movie.Poster} alt={movie.Title} className="w-1/3" />
          <div className="ml-4">
            <h1 className="text-2xl">{movie.Title}</h1>
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <button
              className="bg-blue-500 text-white p-2 mt-2"
              onClick={() => addToFavorites(movie)}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const addToFavorites = (movie) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = [...favorites, movie];
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert(`${movie.Title} added to favorites`);
};

export default Movie;
