import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./Menubar.scss";
import { useState } from "react";

const Menubar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">Movie Net</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="buscar filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Menubar;
