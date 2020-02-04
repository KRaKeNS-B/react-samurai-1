import React from 'react';
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt=""/>
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post
