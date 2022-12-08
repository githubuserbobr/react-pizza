import React, { useRef } from "react";
import { useEffect } from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import SkeletonLoader from "../helpers/loader/SkeletonLoader";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../redux/slices/filterSlice";
import { setSort } from "../redux/slices/sortSlice";

const Home = ({ searchValue }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const isSearch = useRef(false);
  const isMounted = useRef(false);
  // sortParams?
  // header totalCount?
  const { sortMethod, sortParams, sortProperty, currentPage, categoryId } =
    useSelector((state) => state.sortReducer);
  const activeCategory = useSelector(
    (state) => state.filterReducer.activeCategory
  );
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      dispatch(setSort({ ...params }));
      dispatch(setFilters({ ...params }));
      isSearch.current = true;
    }
  }, []);

  const fetchPizzas = () => {
    const pagination = `&page=${currentPage}&limit=4`;
    setIsLoading(true);

    axios
      .get(
        `https://6308ac9b46372013f5839ebc.mockapi.io/pizza-items?${
          searchValue === "" ? "" : `title=${searchValue}`
        }
        ${activeCategory > 0 ? `category=${activeCategory}` : ""}${
          sortParams === "" ? "" : `&sortBy=${sortProperty}&order=${sortMethod}`
        }
        ${pagination}
        `
      )
      .then((res) => {
        setItems(res.data);
      })

      .finally(() => setIsLoading(false));
  };
  React.useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [
    activeCategory,
    sortProperty,
    sortMethod,
    currentPage,
    searchValue,
    sortParams,
  ]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          sortProperty,
          sortMethod,
          currentPage,
          activeCategory,
          categoryId,
        },
        { addQueryPrefix: true }
      );
      navigation(queryString);
    }
    isMounted.current = true
  }, [
    activeCategory,
    sortProperty,
    sortMethod,
    currentPage,
    sortParams,
    categoryId,
  ]);

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
