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
  const [sortParams, setSortParams] = React.useState('')
  const [sortMethod, setSortMethod] = React.useState('asc')
  console.log(sortMethod)
  React.useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://6308ac9b46372013f5839ebc.mockapi.io/pizza-items?${activeCategory > 0 ? `category=${activeCategory}` : ''}${sortParams === '' ? '' : `&sortBy=${sortParams}&order=${sortMethod}`}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => setItems(arr), setIsLoading(false));
    window.scrollTo(0, 0);
  }, [activeCategory,sortParams,sortMethod]);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={(i) => setActiveCategory(i)}
          />
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
