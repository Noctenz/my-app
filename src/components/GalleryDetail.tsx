import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./GalleryDetail.css";

type ImageItem = {
  src: string;
  category: string;
};

const galleryDetailData: Record<string, { title: string; description: string; images: ImageItem[] }> = {
  "fishing-model": {
    title: "Fishing Model",
    description: "3D Model of Fishing Rod and Sea Creature",
    images: [
      {
        src: "https://cdn.discordapp.com/attachments/988467646133579787/1377625572506865754/ancient_kraken.gif",
        category: "Creature",
      },
      {
        src: "https://cdn.discordapp.com/attachments/988467646133579787/1377625572506865754/ancient_kraken.gif",
        category: "Fishing Rod",
      },
      {
        src: "https://cdn.discordapp.com/attachments/988467646133579787/1377625572506865754/ancient_kraken.gif",
        category: "Creature",
      },
    ],
  },
  "dummy": {
    title: "Fishing Model",
    description: "3D Model of Fishing Rod and Sea Creature",
    images: [],
  },
};

const GalleryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? galleryDetailData[slug] : null;

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (!data) return <div>Gallery item not found</div>;

  const categories = ["All", ...new Set(data.images.map((img) => img.category).filter(Boolean))];
  const filteredImages = selectedCategory === "All"
    ? data.images
    : data.images.filter((img) => img.category === selectedCategory);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="gallery-detail-section">
      <div className="gallery-detail-header">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <Link to="/gallery" className="back-link">← Back to gallery</Link>
      </div>

      {/* Category Filter (Only show if not dummy) */}
      {slug !== "dummy" && categories.length > 1 && (
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      {slug === "dummy" ? (
        <div className="youtube-video-wrapper">
          <div className="youtube-responsive">
            <iframe
              src="https://www.youtube.com/embed/L1luf_Xn_2Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        // Gambar Gallery
        <div className="gallery-detail-images">
          {filteredImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`${data.title} ${index + 1}`}
              onClick={() => openModal(index)}
              className="thumbnail"
            />
          ))}
        </div>
      )}

      {/* Modal Zoom */}
      {modalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img
            className="modal-content"
            src={filteredImages[currentImageIndex].src}
            alt="Zoomed"
          />
          <div className="modal-controls">
            <button onClick={prevImage}>◀</button>
            <button onClick={nextImage}>▶</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
