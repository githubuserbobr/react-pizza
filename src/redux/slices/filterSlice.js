import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: '',
  initialState: {
    value: 0,
  },
  reducers: {},
})

export const { increment, decrement, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer