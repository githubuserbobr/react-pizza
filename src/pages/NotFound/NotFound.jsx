import React from 'react'
import styles from './NotFound.module.scss'
export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Ничего не найдено :(</h2>
      <span className={styles.description}>К сожалению, данная страница отсутствует в нашем интернет магазине</span>
    </div>
  )
}
export default NotFound