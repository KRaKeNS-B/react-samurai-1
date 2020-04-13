import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profileReduser'
import dialogsReducer from './dialogsReduser'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReduser'
import authReducer from './authReduser'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
