import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import SkeletonLoader from "../helpers/loader/SkeletonLoader";
import context from "../API/Context/Context";
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSortItem, setActiveSortItem] = React.useState(0);
  const sortList = [
    { name: "цене", sortProperty: "price" },
    { name: "популярности", sortProperty: "rating" },
    { name: "алфавиту", sortProperty: "title" },
  ];
  React.useEffect(() => {
    fetch(
      `https://6308ac9b46372013f5839ebc.mockapi.io/pizza-items?category=${activeCategory}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => setItems(arr), setIsLoading(false));
    window.scrollTo(0, 0);
  }, [activeCategory]);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={(i) => setActiveCategory(i)}
          />
          <Sort
            sortList={sortList}
            activeSortItem={activeSortItem}
            setSortType={(i) => setActiveSortItem(i)}
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
