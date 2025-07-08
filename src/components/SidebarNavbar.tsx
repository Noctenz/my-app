import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarNavbar.css";

type Props = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const SidebarNavbar: React.FC<Props> = ({ theme, setTheme }) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`sidebar-navbar ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="sidebar-logo" onClick={toggleCollapse}>
        <img src="/logo.png" alt="Logo" />
        <span className="sidebar-brand">Sovereign Studio</span>
      </div>

      <nav className="sidebar-menu">
        <Link
          to="/"
          className={`sidebar-icon ${location.pathname === "/" ? "active" : ""}`}
          title="Home"
        >
          <i className="fa fa-fw fa-home"></i>
          <span className="sidebar-label">Home</span>
        </Link>
        <Link
          to="/gallery"
          className={`sidebar-icon ${location.pathname === "/gallery" ? "active" : ""}`}
          title="Gallery"
        >
          <i className="fa fa-fw fa-image"></i>
          <span className="sidebar-label">Galery</span>
        </Link>
        <Link
          to="/apply"
          className={`sidebar-icon ${location.pathname === "/ApplicationStaff" ? "active" : ""}`}
          title="ApplicationStaff"
        >
          <i className="fa fa-fw fa-image"></i>
          <span className="sidebar-label">Galery</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button
          className="sidebar-icon"
          title="Theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <i className={`fa fa-fw ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
          <span className="sidebar-label">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarNavbar;
