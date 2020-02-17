import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReduser'
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  let state = props.store.getState().profilePage

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={ state.posts }
      newPostText={ state.newPostText }
    />
  )
}

export default MyPostsContainer
