import { motion } from "framer-motion";
import { FcDown } from "react-icons/fc";
import styles from "./index.module.scss";
export default function pokedexGuide() {
  return (
    <div className={styles.guide}>
      <h1>Guida Pokemon App</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Benvenuto nel mio pokedex!</h2>
        <p>
          In questa breve guida ti spiegherò come utilizzare il pokedex per
          cercare il tuo pokemon preferito e visualizzare le sue
          caratteristiche.
        </p>
        <p>
          Nel menù in alto clicca su{" "}
          <span className={styles.spanPokedex}>"Pokedex"</span> per andare alla
          pagina di ricerca del Pokemon.
        </p>
        <p>
          Succesivamente clicca sulla barra di ricerca e scrivi il nome del
          pokmeon che desideri visualizzare.
        </p>
        <div className={styles.arrowInputCont}>
          <FcDown />
          <input
            type="text"
            className={styles.inputPokemon}
            placeholder="Cerca pokemon"
          />
        </div>
        <p>
          Dopo aver inserito il nome del pokemon che vuoi visualizzare premi
          invio per far apparire la scheda del tuo pokemon preferito!
        </p>
      </motion.div>
    </div>
  );
}
