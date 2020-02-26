// import React from 'react';
import { connect } from 'react-redux';
import Users from './UsersC';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReduser';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    currentPage: state.usersPage.currentPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setUsersTotalCount: (usersTotalCount) => {
      dispatch(setUsersTotalCountAC(usersTotalCount))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer
