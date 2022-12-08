import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import p from '../Pagination/pagination.module.scss'
import { setCurrentPage } from '../../redux/slices/sortSlice'

export const Pagination = () => {
  const currentPage = useSelector(state => state.sortReducer.currentPage)
  const dispatch = useDispatch()
  const pages = [1,2,3]
  return (
    <div className={p.wrapper}>
      <ul className={p.list}>
      {pages.map((page, i) => 
        <li 
        key={i}
        className={currentPage === i + 1 ? `${p.list_item} ${p.active}` :  `${p.list_item}`}
        onClick={() => dispatch(setCurrentPage(i + 1))}
        >
         {page} 
        </li>)}
      </ul></div>
  )
}

export default Pagination;