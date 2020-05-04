import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReduser'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 6647
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render(){
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  }
}

let mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
) (ProfileContainer)
