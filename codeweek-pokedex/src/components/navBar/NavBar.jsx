import style from "./index.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <img src="https://img.logoipsum.com/226.svg" alt="" />
      <ul className={style.Menu}>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <Link href="/guida">
          <li>Guida</li>
        </Link>
        <li>
          <Link href="/pokedex">Pokedex</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
