import "./index.css";
import { useState } from "react";

const Gallery = ({ imagesGallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeImg = (change) => {
    if (change === 0) {
      setCurrentIndex((prevIndex) => {
        return prevIndex === 0 ? imagesGallery.length - 1 : prevIndex - 1;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        return prevIndex === imagesGallery.length - 1 ? 0 : prevIndex + 1;
      });
    }
  };
  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="GalleryWrap">
        <div className="button__Gallery" onClick={() => changeImg(0)}>
          <p className="left-button">&lt;</p>
        </div>
        <img
          src={imagesGallery[currentIndex].img}
          alt={imagesGallery[currentIndex].title}
        />
        <div className="button__Gallery" onClick={() => changeImg(1)}>
          <p className="right-button">&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
