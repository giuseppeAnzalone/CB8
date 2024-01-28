import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import styles from "./index.module.scss";

const SetColor = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleColorChange = (e) => setColor(e.target.value);

  return (
    <div className={styles.inputCont}>
      <Confetti
        width={width}
        height={height}
        colors={[color]}
        numberOfPieces={50}
      />
      <input
        className={styles.inputColorChange}
        type="text"
        value={color}
        onChange={onHandleColorChange}
        placeholder="Cambia colore"
      />
      <p>
        Scrivi un colore all'interno della input per cambiare il colore dei
        coriandoli
      </p>
    </div>
  );
};

export default SetColor;
