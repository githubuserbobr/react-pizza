import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import SkeletonLoader from "../helpers/loader/SkeletonLoader";
import context from "../API/Context/Context";
import { useSelector } from "react-redux";
const Home = ({ searchValue }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortParams, setSortParams] = React.useState("");
  const [sortMethod, setSortMethod] = React.useState("asc");

  const activeCategory = useSelector(state => state.filterReducer.activeCategory)
  console.log(activeCategory)

  const [currentPage, setCurrentPage] = React.useContext(context);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const pagination = `&page=${currentPage}&limit=4`;
    setIsLoading(true);
    fetch(
      `https://6308ac9b46372013f5839ebc.mockapi.io/pizza-items?${
        searchValue === "" ? "" : `title=${searchValue}`
      }
      ${activeCategory > 0 ? `category=${activeCategory}` : ""}${
        sortParams === "" ? "" : `&sortBy=${sortParams}&order=${sortMethod}`
      }
      ${
        pagination
      }
      `
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        return setItems(arr);
      })
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [activeCategory, sortParams, sortMethod, currentPage, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort
            setSortType={(property) => setSortParams(property)}
            sortMethod={sortMethod}
            setSortMethod={setSortMethod}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div class="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};
export default Home;
