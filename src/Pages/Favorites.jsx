import React, { useState, useEffect } from "react";
import MovieList from "../Components/MovieList";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Favorites</h1>
      <MovieList movies={favorites} />
    </div>
  );
};

export default Favorites;
