import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import profileReducer from './profile-reduser'
import dialogsReducer from './dialogs-reduser'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reduser'
import authReducer from './auth-reduser'
import appReducer from './app-reduser'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store