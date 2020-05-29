import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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
          render={ withSuspense(DialogsContainer) }
        />
        <Route
          path='/profile/:userId?'
          render={ withSuspense(ProfileContainer) }
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

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
) (App)

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={ store } >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp
