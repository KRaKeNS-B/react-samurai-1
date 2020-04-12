import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

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
            ? <button onClick={ () => {
              Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': 'b7b61a1f-cfd6-43d9-8a8f-04bd565996dd',
                },
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(user.id)
                  }
                })

            } } >Unfollow</button>
            : <button onClick={ () => {
              Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                  'API-KEY': 'b7b61a1f-cfd6-43d9-8a8f-04bd565996dd',
                },
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id)
                  }
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
        return (pageN <= props.currentPage + 10 && pageN >= props.currentPage - 10) || pageN === pagesCount || pageN === 1
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
