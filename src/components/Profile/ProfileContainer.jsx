import React from 'react'
import Profile from './Profile'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReduser'

class ProfileContainer extends React.Component {

  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
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
  setUserProfile,
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileContainer)
