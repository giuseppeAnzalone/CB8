import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="public\logoipsum.svg" alt="logoipsum" />
      <div className="NavText">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
