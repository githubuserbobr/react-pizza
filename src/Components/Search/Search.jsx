import React, { useRef, useState } from "react";
import s from "../Search/search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/img/search_icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete_icon.svg";
import { useDebounce } from "../../helpers/hooks/useDebounce";

const Search = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const searchValueDebounced = useDebounce(inputValue, 250);

  function onChangeInput(e) {
    const { value } = e.target;
    setInputValue(value);
    setSearchValue(searchValueDebounced);
  }
  function onClickClear() {
    setInputValue("");
    setSearchValue("");
    inputRef.current.focus();
  }
  return (
    <div className={s.search_wrapper}>
      {inputValue && (
        <DeleteIcon onClick={onClickClear} className={s.delete_icon} />
      )}

      <input
        ref={inputRef}
        className={s.input}
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="Поиск пиццы"
      />
      <SearchIcon className={s.search_icon} />
    </div>
  );
};
export default Search;
