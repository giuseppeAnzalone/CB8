import ProgressBar from "../ProgressBar";

import styles from "./index.module.scss";

const PokemonStats = ({ types, abilities, stats, height, weight, sprites }) => {
  return (
    <div className={styles.statsCont}>
      <div className={styles.pokemonInfoCont}>
        <div className={styles.pokemonInfo}>
          <h3>Types</h3>
          {types && types.map((e, n) => <p key={n}>{e.type.name}</p>)}
        </div>
        <div className={styles.pokemonInfo}>
          <h3>Abilities</h3>
          {abilities &&
            abilities.map((el, k) => <p key={k}>{el.ability.name}</p>)}
        </div>
        <div className={styles.pokemonInfo}>
          <h3>Height</h3>
          <p>{height}</p>
        </div>
        <div className={styles.pokemonInfo}>
          <h3>Weight</h3>
          <p>{weight}</p>
        </div>
      </div>
      <h3 className={styles.titleStats}>Stats</h3>
      <div className={styles.stats}>
        <ul>
          {stats &&
            stats.map((elem) => (
              <li key={elem.stat.name}>
                {elem.stat.name}
                <ProgressBar
                  percentage={elem.base_stat}
                  label={`${elem.base_stat}%`}
                />
              </li>
            ))}
        </ul>
        <div className={styles.miniSprites}>
          {sprites && <img src={sprites.other.showdown.front_default} alt="" />}
          {sprites && <img src={sprites.other.showdown.back_default} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
