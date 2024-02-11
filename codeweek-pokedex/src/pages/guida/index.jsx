import NavBar from "@/components/navBar";
import PokeBall from "@/components/pokeBall/PokeBall";
import Footer from "@/components/footer";

import styles from "../../styles/guide.module.scss";

export default function guida() {
  return (
    <>
      <NavBar />
      <h1 className={styles.guideTitlePage}>Guida all'uso del Pokédex</h1>
      <div className={styles.guide}>
        <p>
          Benvenuto al mondo affascinante dei Pokémon!
          <br />
          Con il tuo Pokédex, avrai accesso a un tesoro di informazioni su
          queste creature straordinarie. Questa guida ti condurrà attraverso i
          passaggi fondamentali per utilizzare il tuo Pokédex in modo efficace e
          divertente.
        </p>
        <h2 className={styles.guideTitle}>Ricerca di un Pokémon</h2>
        <p>
          Digita il nome del Pokémon che desideri cercare nella barra di ricerca
          del tuo Pokédex. Assicurati di digitare correttamente il nome del
          Pokémon per ottenere i risultati desiderati.
        </p>
        <h2 className={styles.guideTitle}>
          Visualizzazione delle Informazioni
        </h2>
        <p>
          Dopo aver inserito il nome del Pokémon, il display del tuo Pokédex
          mostrerà un'immagine nitida e dettagliata del Pokémon cercato
          all'interno del Pokédex. Sotto il display, troverai tutte le
          informazioni essenziali sul Pokémon, come il suo tipo, le abilità, il
          peso, l'altezza e le statistiche.
        </p>
        <h2 className={styles.guideTitle}>
          Esplorazione delle Caratteristiche
        </h2>
        <p>
          Una volta visualizzate le informazioni del Pokémon, prenditi del tempo
          per esplorare le sue caratteristiche.
          <br />
          <br />
          Scopri il tipo di Pokémon (ad esempio, Acqua, Fuoco, Erba), le abilità
          che possiede e le sue misure fisiche come il peso e l'altezza.
          Inoltre, esamina le statistiche del Pokémon per capire meglio le sue
          capacità in battaglia.
        </p>
        <br />
        <p>
          Una parte essenziale dell'esperienza di utilizzo del Pokédex è
          sperimentare e divertirsi. Cerca diversi Pokémon, esplora le loro
          caratteristiche uniche e divertiti a conoscere meglio il vasto mondo
          dei Pokémon.
        </p>
        <br />
        <p>
          Con questa guida, sei pronto per sfruttare appieno il potenziale del
          tuo Pokédex. Esplora, impara e diventa un vero esperto di Pokémon!
          Buona caccia!
        </p>
        <div className={styles.pokeBalls}>
          <PokeBall />
          <PokeBall />
          <PokeBall />
          <PokeBall />
        </div>
      </div>

      <Footer />
    </>
  );
}
