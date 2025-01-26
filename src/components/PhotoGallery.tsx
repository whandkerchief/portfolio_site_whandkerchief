import React, { useState } from "react";
import "./../css/photo-gallery.css";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="photo-gallery">
      <div className="photos-container">
        {photos.map((photo, index) => {
          const position =
            index === currentIndex
              ? "photo-focused"
              : index === (currentIndex - 1 + photos.length) % photos.length
              ? "photo-left"
              : index === (currentIndex + 1) % photos.length
              ? "photo-right"
              : "photo-hidden";

          const handleClick = () => {
            if (position === "photo-left") handlePrevious();
            if (position === "photo-right") handleNext();
          };

          return (
            <div
              key={index}
              className={`photo ${position}`}
              style={{ backgroundImage: `url(${photo})` }}
              onClick={handleClick} 
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
