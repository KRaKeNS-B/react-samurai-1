import React from 'react'
import { connect } from 'react-redux';
import Header from "./Header";
import { authUser, logout } from '../../redux/authReduser'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser()
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

let mapDispatchToProps = {
  authUser,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer)
