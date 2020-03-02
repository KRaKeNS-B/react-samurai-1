import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReduser';
import Axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount () {

    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })

  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render () {
    return <Users
      usersTotalCount={this.props.usersTotalCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
    />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)
