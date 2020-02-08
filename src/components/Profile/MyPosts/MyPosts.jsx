import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: '1', message: `Hi, how are you?`, likesCount: '11'},
    { id: '1', message: `It's my first post`, likesCount: '23'},
  ]
  let postsElements = postsData.map( post =>
    <Post
      message={post.message}
      likesCount={post.likesCount}
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
