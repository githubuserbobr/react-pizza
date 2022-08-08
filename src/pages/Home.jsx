import React from 'react'

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import SkeletonLoader from '../helpers/loader/SkeletonLoader';

 const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        fetch("https://62e7c73c0e5d74566afbaf4d.mockapi.io/items")
            .then(res => {
                return res.json()
            })
            .then(arr => setItems(arr),
                setIsLoading(false))
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div class="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <SkeletonLoader key={index} />)
                        : items.map(item => <PizzaBlock
                            key={item.id}
                            {...item}
                        />)
                }
            </div>
        </div>
    )
}
export default Home