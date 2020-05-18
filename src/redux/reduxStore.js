import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profileReduser'
import dialogsReducer from './dialogsReduser'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReduser'
import authReducer from './authReduser'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReduser'

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
