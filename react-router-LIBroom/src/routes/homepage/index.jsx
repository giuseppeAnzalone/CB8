import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";

import NavBar from "../../components/navBar/";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchBar";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.Homepage}>
        <h1 className={styles.Title}>LIBroom</h1>
        <SearchBar />
        {/* <input className={styles.Input} type="text" placeholder="Search Book" /> */}
        {lists.map((list, i) => (
          <BookList
            bookListData={list.works}
            title={list.name.toUpperCase()}
            key={i}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
