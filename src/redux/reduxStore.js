import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
})

let store = createStore(reducers)

export default store
