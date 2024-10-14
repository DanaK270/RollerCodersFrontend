import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/parks?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">Tt</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/parks">Parks</Link>
        <Link to="/logIn">Log In</Link>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Explore Parks..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Nav;