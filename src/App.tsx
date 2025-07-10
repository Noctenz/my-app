import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ApplicationStaff from "./components/ApplicationStaff";
import SidebarNavbar from './components/SidebarNavbar';
import HomeSection from './components/HomeSection';
import GallerySection from './components/GallerySection';
import GalleryDetail from './components/GalleryDetail'; // ✅ NEW
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.add('visible');
      } else {
        backToTopButton?.classList.remove('visible');
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    const blockDevTools = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton?.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('keydown', blockDevTools);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopButton?.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('keydown', blockDevTools);
    };
  }, []);

  return (
    <Router>
      <div className="app-root">
        <SidebarNavbar theme={theme} setTheme={setTheme} />
        <button id="backToTop" className="back-to-top">↑</button>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="home-wrapper">
                <HomeSection />
                <Home />
                <Footer />
              </div>
            } />
            <Route path="/gallery" element={
              <div className="home-wrapper">
                <GallerySection />
                <Footer />
              </div>
            } />
            <Route path="/gallery/:slug" element={
              <div className="home-wrapper">
                <GalleryDetail />
                <Footer />
              </div>
            } />
            <Route path="/apply" element={<ApplicationStaff />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
