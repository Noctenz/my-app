import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faPlay, faFishFins } from "@fortawesome/free-solid-svg-icons";
import "./GalleryDetail.css";

const categoryIcons: Record<string, any> = {
  "Bigger Creature": faFishFins,
  "Creature": faFish,
  "Animation": faPlay,
};

type ImageItem = {
  src: string;
  category: string;
  mainTitle?: string;
  subTitle?: string;
};

const galleryDetailData: Record<string, {
  title: string;
  description: string;
  video?: string;
  images: ImageItem[];
}> = {
  "fishing-model": {
    title: "Fishing Model",
    description: "3D Model of Fishing Rod and Sea Creature",
    images: [
      { src: "https://files.catbox.moe/q4d1xp.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Leviathan" },
      { src: "https://files.catbox.moe/8gf2bu.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Ice Leviathan" },
      { src: "https://files.catbox.moe/8mkffh.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Chrono Leviathan" },
      { src: "https://files.catbox.moe/bkdhno.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Megalodon" },
      { src: "https://files.catbox.moe/e414di.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Void Megalodon" },
      { src: "https://files.catbox.moe/8or09q.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Neon Megalodon" },
      { src: "https://files.catbox.moe/mem868.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Inferno Shark" },
      { src: "https://files.catbox.moe/ygeymh.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Kraken" },
      { src: "https://files.catbox.moe/6w3crd.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Ancient Kraken" },
      { src: "https://files.catbox.moe/amgrxg.gif", category: "Bigger Creature", mainTitle: "Fish", subTitle: "Fire Plesiosaur" },
      { src: "https://files.catbox.moe/kbk9te.png", category: "Creature", mainTitle: "Fish", subTitle: "Tuna" },
      { src: "https://files.catbox.moe/k8mw61.png", category: "Creature", mainTitle: "Fish", subTitle: "Trout" },
      { src: "https://files.catbox.moe/n8zv2w.png", category: "Creature", mainTitle: "Fish", subTitle: "Large Trout" },
      { src: "https://files.catbox.moe/w798yq.png", category: "Creature", mainTitle: "Fish", subTitle: "Sardine" },
      { src: "https://files.catbox.moe/25rzbg.png", category: "Creature", mainTitle: "Fish", subTitle: "Guppy" },
      { src: "https://files.catbox.moe/kk4unt.png", category: "Creature", mainTitle: "Fish", subTitle: "Cod" },
      { src: "https://files.catbox.moe/fo7vzm.png", category: "Creature", mainTitle: "Fish", subTitle: "Clownfish" },
      { src: "https://files.catbox.moe/1ue8oj.png", category: "Creature", mainTitle: "Fish", subTitle: "Yellow Tang" },
      { src: "https://files.catbox.moe/ubrxr0.png", category: "Creature", mainTitle: "Fish", subTitle: "Lionfish" },
      { src: "https://files.catbox.moe/h23e7j.png", category: "Creature", mainTitle: "Fish", subTitle: "Pink Jellyfish" },
      { src: "https://files.catbox.moe/2hd6n0.png", category: "Creature", mainTitle: "Fish", subTitle: "Blue Jellyfish" },
      { src: "https://files.catbox.moe/g10pgl.png", category: "Creature", mainTitle: "Fish", subTitle: "Coelacanth" },
      { src: "https://files.catbox.moe/h6dgbf.png", category: "Creature", mainTitle: "Fish", subTitle: "Ghost Koi" },
      { src: "https://files.catbox.moe/0ijq8i.png", category: "Creature", mainTitle: "Fish", subTitle: "Octopus" },
      { src: "https://files.catbox.moe/dc5owp.png", category: "Creature", mainTitle: "Fish", subTitle: "Red Snapper" },
      { src: "https://files.catbox.moe/0c4ksz.png", category: "Creature", mainTitle: "Fish", subTitle: "Royal Anglerfish" },
      { src: "https://files.catbox.moe/n7gkza.png", category: "Creature", mainTitle: "Fish", subTitle: "Spyfish" },
      { src: "https://files.catbox.moe/vllqt8.png", category: "Creature", mainTitle: "Fish", subTitle: "Sunfish" },
      { src: "https://files.catbox.moe/0rafvk.png", category: "Creature", mainTitle: "Fish", subTitle: "Tiktalik" },
      { src: "https://files.catbox.moe/lfz85n.png", category: "Creature", mainTitle: "Fish", subTitle: "Unicornfish" },
      { src: "https://files.catbox.moe/hvjpvj.png", category: "Creature", mainTitle: "Fish", subTitle: "Arapaima" },
      { src: "https://files.catbox.moe/3y2vai.png", category: "Creature", mainTitle: "Fish", subTitle: "Salmon" },
      { src: "https://files.catbox.moe/847ktb.png", category: "Creature", mainTitle: "Fish", subTitle: "Barracuda" },
      { src: "https://files.catbox.moe/2i3ezf.png", category: "Creature", mainTitle: "Fish", subTitle: "Beluga Sturgeon" },
    ],
  },
  "dummy": {
    title: "Training Dummy",
    description: "Training Dummy with custom mob model, animation, and Damage indicator chat",
    video: "https://www.youtube.com/embed/L1luf_Xn_2Y",
    images: [
      { src: "https://files.catbox.moe/uuzww7.gif", category: "Animation", mainTitle: "Dummy Animation", subTitle: "[ Hit ]" },
      { src: "https://files.catbox.moe/ypwl0q.gif", category: "Animation", mainTitle: "Dummy Animation", subTitle: "[ Spawn ]" },
      { src: "https://files.catbox.moe/lt6v9r.gif", category: "Animation", mainTitle: "Dummy Animation", subTitle: "[ Despawn ]" },
    ],
  },
  "elemental-orb": {
    title: "Elemental Orb",
    description: "Bijix",
    video: "https://www.youtube.com/embed/PA1ODq3keSM",
    images: [
      {},
    ],
  },
};

const GalleryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? galleryDetailData[slug] : null;

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!data) return <div>Gallery item not found</div>;

  const categories = ["All", ...new Set(data.images.map(img => img.category).filter(Boolean))];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="gallery-detail-section">
      <div className="gallery-detail-header">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <Link to="/gallery" className="back-link">← Back to gallery</Link>
      </div>

      {data.images.length > 0 && (
        <>
          {categories.length > 1 && (
            <div className="category-buttons">
              {categories.map(category => (
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

          {data.video && (
            <div className="youtube-video-wrapper">
              <div className="youtube-responsive">
                <iframe
                  src={data.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {selectedCategory === "All" ? (
            categories.filter(category => category !== "All").map(category => {
              const icon = categoryIcons[category]; 
              const categoryImages = data.images.filter(img => img.category === category);
              if (categoryImages.length === 0) return null;

              return (
                <div key={category}>
                  <div className="category-title-wrapper"><h2>{icon && <FontAwesomeIcon icon={icon} />} {category}</h2></div>
                  <div className="gallery-detail-images">
                    {categoryImages.map((img, index) => (
                      <div key={index} className="thumbnail-item">
                        <div className="thumbnail-card" onClick={() => openModal(data.images.indexOf(img))}>
                          <img src={img.src} alt={img.mainTitle} className="thumbnail-image" />
                        </div>
                        <div className="thumbnail-text">
                          <div className="thumbnail-main-title">{img.mainTitle}</div>
                          <div className="thumbnail-sub-title">{img.subTitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="gallery-detail-images">
              {data.images.filter(img => img.category === selectedCategory).map((img, index) => (
                <div key={index} className="thumbnail-item">
                  <div className="thumbnail-card" onClick={() => openModal(data.images.indexOf(img))}>
                    <img src={img.src} alt={img.mainTitle} className="thumbnail-image" />
                  </div>
                  <div className="thumbnail-text">
                    <div className="thumbnail-main-title">{img.mainTitle}</div>
                    <div className="thumbnail-sub-title">{img.subTitle}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {modalOpen && (
        <div className="modal">
          <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
          <img
            className="modal-content"
            src={data.images[currentImageIndex].src}
            alt={data.images[currentImageIndex].mainTitle || "Zoomed"}
          />
          <div className="modal-controls">
            <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length)}>◀</button>
            <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % data.images.length)}>▶</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
