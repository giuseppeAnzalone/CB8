import { useState } from "react";
import "./index.css";

const DayCard = ({ dayObject }) => {
  const imgDefault = dayObject.img;
  const [image, setImmagine] = useState(imgDefault);

  const onHandleClick = (idDay) => {
    setImmagine((prevImage) => {
      if (prevImage === imgDefault) {
        if (idDay % 2 === 0) {
          return "src/assets/xmas-sweet-2.jpg";
        } else {
          return "src/assets/xmas-sweet-1.jpg";
        }
      } else {
        return imgDefault;
      }
    });
  };

  return (
    <div className="Day__Card">
      <img
        src={image}
        alt={dayObject.title}
        onClick={() => onHandleClick(dayObject.id)}
      />
    </div>
  );
};

export default DayCard;
