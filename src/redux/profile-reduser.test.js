import profileReducer, { addPostActionCreator, deletePost } from './profile-reduser'

let state = {
  posts: [
    { id: 1, message: `Hi, how are you?`, likesCount: 11 },
    { id: 2, message: `It's my first post`, likesCount: 23 },
  ],
}

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('new post test')

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('new post test')

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts[2].message).toBe('new post test')
})

test('after deleting length of posts should be decrement', () => {
  // 1. test data
  let action = deletePost(1)

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(1)
})

test(`after deleting length of posts shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000)

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(2)
})
