import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map( post =>
    <Post
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
      key={post.id}
    />
  )

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch({
      type: 'ADD-POST',
    })
  }

  let onPostChange = () => {
    const text = newPostElement.current.value
    const newLocal = {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text,
    }
    props.dispatch(newLocal)
  }

  return (
    <div className={classes.postsBlock} >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={ onPostChange }
            ref={ newPostElement }
            value={ props.newPostText }
          />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
