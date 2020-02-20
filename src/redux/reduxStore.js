import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
})

let store = createStore(reducers)

export default store
