import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌀 SovereignStudio</div>
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/gallery">Galeri</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
