import React from 'react'
import p from '../Pagination/pagination.module.scss'
export const Pagination = ({currentPage,setCurrentPage}) => {
  const pages = [1,2,3]
  console.log(currentPage)
  return (
    <div className={p.wrapper}>
      <ul className={p.list}>
      {pages.map((page, i) => 
        <li 
        key={i}
        className={p.list_item}
        onClick={() => setCurrentPage(i + 1)}
        >
         {page} 
        </li>)}
      </ul></div>
  )
}

export default Pagination;