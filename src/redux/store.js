import profileReducer from "./profile-reduser"
import dialogsReducer from "./dialogs-reduser"
import sidebarReducer from "./sidebar-reduser"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: `Hi, how are you?`, likesCount: 11 },
        { id: 2, message: `It's my first post`, likesCount: 23 },
      ],
      newPostText: 'Бла Бла Бла',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Mary' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Vova' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State change')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) { // action { type: 'ADD-POST', }

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store
// window.store = store
