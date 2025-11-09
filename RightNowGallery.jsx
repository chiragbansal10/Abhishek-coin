import React from "react";
import "./RightNowGallery.css";

const galleryItems = [
  {
    title: "Get Ready For The Holidays",
    imgSrc:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Home For Christmas",
    imgSrc:
      "https://images.unsplash.com/photo-1609861123267-5c177541c57b?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Arrivals",
    imgSrc:
      "https://images.unsplash.com/photo-1560448079-99a994c5b503?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Coconvail x Le Pavé",
    imgSrc:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c7e?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Coconvail Gift Card",
    imgSrc:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Exceptional Gifts",
    imgSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60",
  },
];

const RightNowGallery = () => {
  return (
    <section className="right-now-gallery">
      <div className="gallery-header">
        <h2>Right now</h2>
        <p>Discover our latest news</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, idx) => (
          <div key={idx} className={`gallery-item item-${idx + 1}`}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RightNowGallery;
