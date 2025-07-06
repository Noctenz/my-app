import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? "☀️ Mode Terang" : "🌙 Mode Gelap"}
    </button>
  );
};

export default ThemeToggle;
