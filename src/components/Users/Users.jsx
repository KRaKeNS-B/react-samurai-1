import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

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
          <NavLink to={ '/profile/' + user.id }>
            <img
              src={ user.photos.small != null ? user.photos.small : userPhoto }
              alt="Ava"
              className={ styles.userPhoto }
            />
          </NavLink>
        </div>
        <div>
          { user.followed
            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
              props.toggleFollowingProgress(true, user.id)
              usersAPI.unfollow(user.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                  props.toggleFollowingProgress(false, user.id)
                })

            } } >Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
              props.toggleFollowingProgress(true, user.id)
              usersAPI.follow(user.id)
                .then(data => {
                  if (data.resultCode === 0) {
                    props.follow(user.id)
                  }
                  props.toggleFollowingProgress(false, user.id)
                })

            } } >Follow</button>
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
      { pages.filter( pageN => {
        return (pageN <= props.currentPage + 5 && pageN >= props.currentPage - 5) || pageN === pagesCount || pageN === 1
      }).map( pageN => {
        return (
          <span
            className={ props.currentPage === pageN ? styles.currentPage : undefined }
            onClick={ () => props.onPageChanged(pageN) }
            key={ pageN }
          >
            { pageN }
            { pageN === pagesCount ? '' : ' ' }
          </span>
      )})}
    </div>
    { usersElements }
  </div>
}

export default Users
