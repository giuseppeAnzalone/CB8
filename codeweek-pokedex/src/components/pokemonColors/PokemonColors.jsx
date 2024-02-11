import styles from "./index.module.scss";

const PokemonColors = ({ onCardClick }) => {
  const listPokemonColors = [
    {
      id: 1,
      img: "pokemon-red.jpg",
      title: "pokemon red",
      bgImgHome: "bg-pokemon-red.jpg",
    },
    {
      id: 2,
      img: "pokemon-yellow.jpg",
      title: "pokemon yellow",
      bgImgHome: "bg-pokemon-yellow.jpg",
    },
    {
      id: 3,
      img: "pokemon-blue.jpg",
      title: "pokemon blue",
      bgImgHome: "bg-pokemon-blue.jpg",
    },
    {
      id: 4,
      img: "pokemon-silver.jpg",
      title: "pokemon silver",
      bgImgHome: "bg-pokemon-silver.jpg",
    },
    {
      id: 5,
      img: "pokemon-gold.jpg",
      title: "pokemon goold",
      bgImgHome: "bg-pokemon-gold.jpg",
    },
    {
      id: 6,
      img: "pokemon-crystal.jpg",
      title: "pokemon crystal",
      bgImgHome: "bg-pokemon-crystal.jpg",
    },
  ];
  return (
    <div>
      <h3 className={styles.pokemonColorsTitle}>Top Pokemon Colors Games</h3>
      <br />
      <h4 className={styles.pokemonColorsTitle}>Clicca su una card!</h4>
      <div className={styles.pokemonListColors}>
        {listPokemonColors.map((element) => (
          <img
            className={styles.pokemonColors}
            src={element.img}
            alt={element.title}
            key={element.id}
            onClick={() => onCardClick(element.bgImgHome)}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default PokemonColors;
