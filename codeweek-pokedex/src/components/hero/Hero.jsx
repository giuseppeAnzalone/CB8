import Link from "next/link";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroText}>
        <h1 className={styles.HeroTitle}>Code Week Pokédex</h1>
        <h2>Benvenuto cercatore di Pokemon!</h2>
        <p className={styles.HeroParagraph}>
          Sei pronto a scoprire tutte le caratteristiche dei tuoi pokemon
          preferiti?
        </p>
        <Link href={"/pokedex"}>
          <button className={styles.HeroBtn}>Vai al Pokedéx</button>
        </Link>
      </div>

      <img className={styles.GameBoyImg} src="/gameBoy.png" alt="game-boy" />
    </div>
  );
};

export default Hero;
