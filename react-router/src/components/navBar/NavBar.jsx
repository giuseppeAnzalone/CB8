import { Link } from "react-router-dom";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
