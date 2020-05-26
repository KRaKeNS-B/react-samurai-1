import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ({currentPage, usersTotalCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {

  let usersElements = users.map( user =>
    <User
      key={ user.id }
      user={user}
      followingInProgress={followingInProgress}
      follow={follow}
      unfollow={unfollow}
    />
  )

  return <div>
    <Paginator
      currentPage={currentPage}
      itemsTotalCount={usersTotalCount}
      pageSize={pageSize}
      onPageChanged={onPageChanged}
    />
    <div>
      { usersElements }
    </div>
  </div>
}

export default Users
