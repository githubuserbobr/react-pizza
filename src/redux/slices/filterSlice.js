import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 0,
    categories: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: ((state, action) => {
            state.activeCategory = action.payload
        }),
        setFilters: ((state, action) => {
            state.activeCategory = Number(action.payload.activeCategory)
        })
    }
})

export const {setActiveCategory, setFilters} = filterSlice.actions
export default filterSlice.reducer