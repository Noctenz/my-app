import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarNavbar.css";

type Props = {
  theme: 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => void
};

const SidebarNavbar: React.FC<Props> = ({ theme, setTheme }) => {
  const location = useLocation();

  return (
    <aside className="sidebar-navbar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="sidebar-menu">
        <Link
          to="/"
          className={`sidebar-icon${location.pathname === "/" ? " active" : ""}`}
          title="Home"
        >
          <i className="fa fa-fw fa-home"></i>
        </Link>
        <Link
          to="/gallery"
          className={`sidebar-icon${location.pathname === "/gallery" ? " active" : ""}`}
          title="Gallery"
        >
          <i className="fa fa-fw fa-image"></i>
        </Link>
      </nav>
      <div className="sidebar-footer">
        <button
          className="sidebar-icon"
          title="Theme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <i className={`fa fa-fw ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>
      </div>
    </aside>
  );
};

export default SidebarNavbar;