import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";

import "./index.scss";

const NavBar = () => {
  return (
    <div className="Navbar">
      <ul className="menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/copyright"}>Copyright</Link>
        </li>
        <li>
          <Link to={"/regolamento"}> Regolamento</Link>
        </li>
      </ul>
      <p className="icon">
        <FaBell />
      </p>
    </div>
  );
};

export default NavBar;
