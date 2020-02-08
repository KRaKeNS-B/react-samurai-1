import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {
  let postsData = props.posts
  let postsElements = postsData.map( post =>
    <Post
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
      key={post.id}
    />
  )

  return (
    <div className={classes.postsBlock} >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
