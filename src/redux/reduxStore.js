import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";
import authReducer from "./authReduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = createStore(reducers)

window.store = store

export default store
