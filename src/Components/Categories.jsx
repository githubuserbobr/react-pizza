import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setActiveCategory } from "../redux/slices/filterSlice"
export const Categories = () => {
    const activeCategory = useSelector(state => state.filterReducer.activeCategory)
    const categories = useSelector(state => state.filterReducer.categories)
    const dispatch = useDispatch()
    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => <li
                    key={index}
                    onClick={() => dispatch(setActiveCategory(index))}
                    className={activeCategory === index ? "active" : null}>
                    {title}
                </li>)}
            </ul>
        </div>
    )
}
export default Categories