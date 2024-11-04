import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-5 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Movie Search
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
