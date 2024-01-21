import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { HTTP_GET } from "../../utils/http";
import { Link } from "react-router-dom";

import { FaHouse } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replaceAll(" ", "+")}`).then((data) =>
      setBookInfo(data.docs[0])
    );
  }, [bookId]);

  return (
    <div className={styles.Book}>
      <Link className={styles.BackToHome} to="/">
        <FaHouse /> Back to Home
      </Link>
      {bookInfo?.isbn && (
        <>
          <div className={styles.cover}>
            <img
              className={styles.image}
              src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
              alt={bookInfo?.title}
            />
          </div>
          <h1>{bookInfo?.title}</h1>
          <h3>{bookInfo?.author_name}</h3>
          <div className={styles.ratingsLanguage}>
            <span>
              Rating: {bookInfo?.ratings_count}
              <FaRegStar className={styles.iconStar} />
            </span>
            Language: {bookInfo?.language[0]}
          </div>
          <h4>What's it about?</h4>
          <p>{bookInfo?.first_sentence[0]}</p>
        </>
      )}
    </div>
  );
}
