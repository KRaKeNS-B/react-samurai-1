import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt=""/>
      <div>
        { props.message }
      </div>
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post
