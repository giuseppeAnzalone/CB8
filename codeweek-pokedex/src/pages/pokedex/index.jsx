import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import NavBar from "@/components/navBar";
import PokemonStats from "@/components/pokemonStats";
import Footer from "@/components/footer";

import styles from "../../styles/pokedex.module.scss";

export default function pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    if (router.query.name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((res) => {
          if (!res.ok) throw new Error("Pokemon not found");
          return res.json();
        })
        .then((data) => setPokemonData(data))
        .catch((error) => {
          console.error("Error fetching Pokemon:", error);
          setPokemonData({});
        });
    }
  }, [router.query.name]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (pokemonSearch.trim() !== "") {
      router.push(`/pokedex?name=${pokemonSearch.toLowerCase()}`);
    }
  };

  const onHandleChange = (e) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className={styles.pokedexPage}>
        <h1 className={styles.titlePage}>Pokedéx Page</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.gameBoy}>
            <div className={styles.monitor}>
              <div className={styles.display}>
                {pokemonData.sprites ? (
                  <img
                    className={styles.pokemonImg}
                    src={pokemonData.sprites.other.home.front_default}
                    alt="pokemon"
                  />
                ) : (
                  <p></p>
                )}
              </div>
              <div className={styles.monitorText}>
                <h2 className={styles.title}>POKEDEX</h2>
                <div className={styles.subtitle}>
                  <span className={styles.colorC}>C</span>
                  <span className={styles.colorO}>O</span>
                  <span className={styles.colorL}>L</span>
                  <span className={styles.colorOo}>O</span>
                  <span className={styles.colorR}>R</span>
                </div>
              </div>
            </div>
            <form className={styles.form} onSubmit={onHandleSubmit}>
              <input
                className={styles.inputPokemon}
                value={pokemonSearch}
                onChange={onHandleChange}
                type="text"
                placeholder="Cerca pokemon"
                required
              />
              <input
                className={styles.srcPokemon}
                type="submit"
                value="Cerca"
              />
            </form>
          </div>
        </motion.div>
        <h2 className={styles.pokemonName}>{pokemonData.name}</h2>
        <PokemonStats
          types={pokemonData.types}
          abilities={pokemonData.abilities}
          stats={pokemonData.stats}
          height={pokemonData.height}
          weight={pokemonData.weight}
          sprites={pokemonData.sprites}
        />
        <Footer />
      </div>
    </>
  );
}
