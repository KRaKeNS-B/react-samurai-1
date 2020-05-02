import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, getUsers} from '../../redux/usersReduser'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {

  componentDidMount () {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
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
        followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress
  }
}

let mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
}

let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRedirect)
