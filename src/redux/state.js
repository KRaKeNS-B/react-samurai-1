let rerenderEntireTree = () => {
  console.log('State change')
}

let state = {
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
  },
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = observer => {
  rerenderEntireTree = observer
}

export default state
