import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'

const MyPosts = props => {
  let postsElements = props.posts.map( post =>
    <Post
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
      key={post.id}
    />
  )

  let onAddPost = (values) => {
    props.addPost(values.newPostBody)
  }

  return (
    <div className={classes.postsBlock} >
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          component='textarea'
          name='newPostBody'
          placeholder='Enter new post'
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form: 'profileAddNewPostForm'
}) (AddNewPostForm)

export default MyPosts
