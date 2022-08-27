import React from "react"
export const Categories = ({onClickCategory, activeCategory}) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => <li
                    key={index}
                    onClick={() => onClickCategory(index)}
                    className={activeCategory === index ? "active" : null}>
                    {title}
                </li>)}
            </ul>
        </div>
    )
}
export default Categories