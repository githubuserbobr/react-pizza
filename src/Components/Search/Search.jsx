import React from "react";
import s from "../Search/search.module.scss";
const Search = ({ searchValue, setSearchValue }) => {
    console.log(searchValue)
  return (
    <input className={s.input}
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Поиск пиццы"
    />
  );
};
export default Search;
