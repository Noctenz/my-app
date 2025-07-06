import React from "react";
import "./Home.css";

const partners = [
  { src: "/brands/amazon.png", alt: "Amazon" },
  { src: "/brands/google.png", alt: "Google" },
  { src: "/brands/taskrabbit.png", alt: "TaskRabbit" },
  { src: "/brands/airtable.png", alt: "Airtable" },
  { src: "/brands/box.png", alt: "Box" },
  { src: "/brands/godaddy.png", alt: "GoDaddy" },
  { src: "/brands/asana.png", alt: "Asana" },
];

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage-main">
        <div className="homepage-content">
          <h1>
            <span>Design</span>
            <br />
            <span>confidently.</span>
          </h1>
          <p>
            SovereignStudio is a digital creative studio that takes the guesswork out of design decisions by validating them with real users and delivering innovative solutions for the Minecraft and creator community.
          </p>
          <button className="homepage-btn">Get started</button>
        </div>
        <div className="homepage-image-container">
          <div className="homepage-image-bg">
            <img
              className="homepage-image"
              src="/assets/character.png"
              alt="SovereignStudio Mascot"
            />
          </div>
        </div>
      </div>
      <div className="homepage-partners">
        <div className="homepage-partners-caption">
          The world's best companies rely on SovereignStudio to make better design decisions.
        </div>
        <div className="homepage-partners-logos">
          {partners.map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}