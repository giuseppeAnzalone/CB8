import "./index.css";

const Hero = ({ titleHero, pHero }) => {
  return (
    <div className="Hero">
      <h1>{titleHero}</h1>
      <p>{pHero}</p>
    </div>
  );
};

export default Hero;
