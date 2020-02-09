let state = {
  profilePage: {
    posts: [
      { id: 1, message: `Hi, how are you?`, likesCount: 11 },
      { id: 2, message: `It's my first post`, likesCount: 23 },
    ],
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

export default state
