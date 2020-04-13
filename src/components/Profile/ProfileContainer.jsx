import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReduser'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    this.props.getUserProfile(userId)
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
  }
}

let mapDispatchToProps = {
  getUserProfile,
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent)
