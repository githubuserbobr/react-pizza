import React from "react"
export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    return (
        <div class="categories">
            <ul>
                {categories.map((title, index) => <li
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={activeIndex === index ? "active" : null}>
                    {title}
                </li>)}
            </ul>
        </div>
    )
}
export default Categories