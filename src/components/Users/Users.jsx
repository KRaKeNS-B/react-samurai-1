import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
  let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let usersElements = props.users.map( user =>
    <div key={ user.id }>
      <span>
        <div>
          <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="Ava" className={ styles.userPhoto } />
        </div>
        <div>
          { user.followed
            ? <button onClick={ () => props.unfollow(user.id) } >Unfollow</button>
            : <button onClick={ () => props.follow(user.id) } >Follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>
            { user.name }
          </div>
          <div>
            { user.status }
          </div>
        </span>
        <span>
          <div>
            { "user.location.city" }
          </div>
          <div>
            { "user.location.country" }
          </div>
        </span>
      </span>
    </div>
  )

  return <div>
    <div>
      { pages.map( pageN => {
        return (
          <span
            className={ props.currentPage === pageN ? styles.currentPage : undefined }
            onClick={ () => props.onPageChanged(pageN) }
            key={ pageN }
          >
            { pageN }
          </span>
      )})}
    </div>
    { usersElements }
  </div>
}

export default Users
