import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import SidebarNavbar from './components/SidebarNavbar';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Ganti class body saat theme berubah
  React.useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  return (
    <Router>
      <div className="app-root">
        <SidebarNavbar theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <HomeSection />
                <Home />
              </>
            } />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;