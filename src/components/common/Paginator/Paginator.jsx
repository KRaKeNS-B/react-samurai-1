import React from 'react'
import styles from './Paginator.module.css'

let Paginator = ({currentPage, itemsTotalCount, pageSize, onPageChanged, pagesOffset}) => {
  let pagesCount = Math.ceil(itemsTotalCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
      { pages.filter( pageN => {
        return (pageN <= currentPage + 5 && pageN >= currentPage - 5) || pageN === pagesCount || pageN === 1
      }).map( pageN => {
        return (
          <span
            className={ currentPage === pageN ? styles.currentPage : undefined }
            onClick={ () => onPageChanged(pageN) }
            key={ pageN }
          >
            { pageN }
            { pageN === pagesCount ? '' : ' ' }
          </span>
      )})}
  </div>
}

export default Paginator
