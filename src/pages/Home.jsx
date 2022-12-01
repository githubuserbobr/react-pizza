import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import SkeletonLoader from "../helpers/loader/SkeletonLoader";
import context from "../API/Context/Context";
import { useSelector } from "react-redux";
import axios from "axios"
const Home = ({ searchValue }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const sortMethod = useSelector((state) => state.sortReducer.sortMethod)
  const sortParams = useSelector((state) => state.sortReducer.sortPropery)
  const activeCategory = useSelector(state => state.filterReducer.activeCategory)
  const sortProperty = useSelector(state => state.sortReducer.sortProperty)

// TODO деструктурировать useSelector
// useDebounce
  const [currentPage, setCurrentPage] = React.useContext(context);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const pagination = `&page=${currentPage}&limit=4`;
    setIsLoading(true);
    
    axios.get(`https://6308ac9b46372013f5839ebc.mockapi.io/pizza-items?${
          searchValue === "" ? "" : `title=${searchValue}`
        }
        ${activeCategory > 0 ? `category=${activeCategory}` : ""}${
          sortParams === "" ? "" : `&sortBy=${sortProperty}&order=${sortMethod}`
        }
        ${
          pagination
        }
        `)
      .then((res) => {
        setItems(res.data)
      })

      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [activeCategory, sortProperty, sortMethod, currentPage, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
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
