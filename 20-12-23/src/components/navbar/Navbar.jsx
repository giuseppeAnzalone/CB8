import { FaUser, FaFacebookMessenger, FaSearch } from "react-icons/fa";
import "./index.css";

const Navbar = ({ icon }) => {
  return (
    <nav className="Navbar">
      <img src="src\assets\vitter-logo.png" alt="logo" />
      <ul className="Navbar__list">
        <li>
          <FaUser />
        </li>
        <li>
          <FaFacebookMessenger />
        </li>
        <li>
          <FaSearch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
