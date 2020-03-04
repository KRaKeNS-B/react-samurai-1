import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/usersReduser'
import Axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

  componentDidMount () {
    this.props.toggleIsFetching(true)
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setUsersTotalCount(response.data.totalCount)
      })

  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render () {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users
        usersTotalCount={this.props.usersTotalCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.usersTotalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

let mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)
