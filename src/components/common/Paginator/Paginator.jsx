import React from 'react'
import styles from './Paginator.module.css'

let Paginator = ({currentPage, itemsTotalCount, pageSize, onPageChanged, pagesOffset}) => {
  const pagesCount = Math.ceil(itemsTotalCount / pageSize)
  const offset = pagesOffset - 1
  const firstPage = (currentPage - offset > 1) ? currentPage - offset : 1
  const lastPage = (currentPage + offset < pagesCount) ? currentPage + offset : pagesCount

  let pages = []
  if (firstPage > 1) {
    pages.push(1)
  }

  for (let i = firstPage; i <= lastPage; i++) {
    pages.push(i)
  }

  if (pagesCount > lastPage) {
    pages.push(pagesCount)
  }

  return <div>
      { pages.map( pageN => {
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
