import React, { useState } from "react";
import { Link } from "react-router-dom"; // pastikan pakai React Router
import "./GallerySection.css";

const galleryData = [
  {
    title: "Fishing Model",
    description: "",
    badge: ["3D Model"],
    category: ["3D Model"],
    image: "/1.svg",
    creator: "Commissioned for Alwination",
    date: "27 Apr 2025",
    slug: "fishing-model",
  },
  {
    title: "Dummy",
    description: "",
    badge: ["MythicMobs"],
    category: ["MythicMobs"],
    image: "/2.svg",
    creator: "SovereignStudio Assets",
    date: "-",
    slug: "dummy",
  },
  {
    title: "RPG Item",
    description: "",
    badge: ["3D Model", "Pixel Art"],
    category: ["3D Model", "Pixel Art"],
    image: "/2.svg",
    creator: "Crazy Network",
    date: "-",
    slug: "crazy-network",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Semua");

  const categories = ["Semua", "3D Model", "MythicMobs", "Pixel Art"];

  const filteredData =
    activeTab === "Semua"
      ? galleryData
      : galleryData.filter((item) => item.category.includes(activeTab));

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>
          <span className="highlight">Portofolio</span> Gallery
        </h2>
        <p>
          Explore our portfolio of creative work in the world of Minecraft, which includes a variety of designs, including high-quality 3D modeling and pixel art.
          From tool models and mobs to detailed environments, each piece is meticulously crafted to deliver a unique and immersive visual experience within the game.
          This reflects our commitment to innovation, aesthetics, and optimization within the Minecraft world, from servers to resource packs to commercial projects.
        </p>

        <div className="gallery-tabs">
          {categories.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(label)}
              className={activeTab === label ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {filteredData.map((item, idx) => (
          <Link to={`/gallery/${item.slug}`} key={idx} className="gallery-card-link">
            <div className="gallery-card">
              <img src={item.image} alt={item.title} />
              <div className="gallery-meta">
                <div style={{ marginBottom: "8px" }}>
                  {item.badge.map((b, i) => (
                    <span className="badge" key={i} style={{ marginRight: "6px" }}>
                      {b}
                    </span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="creator-row">
                  <h4>{item.creator}</h4>
                  <h4>{item.date}</h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
