import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Sovereign Studio</h2>
          <p>
            In this blocky world, your creativity is limitless. There is no limit to building
            dreams, even from simple blocks. Like in Minecraft, life also needs crafting to be
            extraordinary.
          </p>
          <p><strong>Check Product →</strong></p>
        </div>
        <div className="footer-right">
          <h3>Join our community!</h3>
          <p>
            Want something unique? We also accept commissions! We are ready to realize your
            Minecraft ideas whether for servers, personal projects, or content creators. Just tell
            us your concept, and let us build your dream world block by block. Hurry up and join
            now!
          </p>
          <button className="discord-button">
            💬 Join Discord
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Sovereign Studio. All rights reserved – Made with ❤️ by Noctenz</p>
      </div>
    </footer>
  );
};

export default Footer;
