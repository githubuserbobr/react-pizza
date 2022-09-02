import React from "react";
import s from "../Search/search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete_icon.svg";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.search_wrapper}>
      {searchValue && (
        <DeleteIcon
          onClick={() => setSearchValue("")}
          className={s.delete_icon}
        />
      )}

      <input
        className={s.input}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск пиццы"
      />
      <SearchIcon className={s.search_icon} />
    </div>
  );
};
export default Search;
