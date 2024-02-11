import Link from "next/link";

import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Code Week | NextJs</p>
      <p>Edgemony CB8</p>
      <p>
        Pokedex by&nbsp;
        <Link href="https://github.com/giuseppeAnzalone" target="blank">
          Giuseppe Anzalone
        </Link>
      </p>
    </div>
  );
};

export default Footer;
