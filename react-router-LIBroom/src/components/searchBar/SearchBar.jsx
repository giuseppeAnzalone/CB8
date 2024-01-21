import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./index.module.scss";

const SearchBar = () => {
  const [inputValue, setiInputValue] = useState("");
  const navigate = useNavigate();

  const onHandleInputChange = (e) => {
    setiInputValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${inputValue}`);
  };

  return (
    <form className={styles.Search} onSubmit={onHandleSubmit}>
      <input
        className={styles.SearchBar}
        type="text"
        placeholder="Search title"
        value={inputValue}
        onChange={onHandleInputChange}
      />
      <button className={styles.SearchBtn} type="submit">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchBar;
