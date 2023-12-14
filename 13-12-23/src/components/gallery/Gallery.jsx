import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="GalleryWrap">
        <img src="https://picsum.photos/250/250?1" alt="image 1" />
        <img src="https://picsum.photos/250/250?2" alt="image 2" />
        <img src="https://picsum.photos/250/250?3" alt="image 3" />
        <img src="https://picsum.photos/250/250?4" alt="image 4" />
      </div>
    </div>
  );
};

export default Gallery;
