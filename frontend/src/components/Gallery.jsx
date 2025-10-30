import React from "react";
import "../styles/Gallery.css";

const gallery = [
  "https://images.pexels.com/photos/34440783/pexels-photo-34440783.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17796/christmas-xmas-gifts-presents.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  
];

const Gallery = () => {
  return (
    <section className="gallery-section">
    

      <div className="gallery-grid">
        {gallery.map((img, idx) => (
          <img key={idx} src={img} alt="Custom Order" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
