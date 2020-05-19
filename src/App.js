import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initializeApp()
    return () => {}
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={ () => <DialogsContainer /> }
        />
        <Route
          path='/profile/:userId?'
          render={ () => <ProfileContainer /> }
        />
        <Route
          path='/users'
          render={ () => <UsersContainer /> }
        />
        <Route
          path='/login'
          render={ () => <Login /> }
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const mapDispatchToProps = {
  initializeApp,
}


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
) (App)
