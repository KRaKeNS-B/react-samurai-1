import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
      </div>
      <div>
        <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt=""/>
        description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div className={classes.item}>
            post 1
          </div>
          <div className={classes.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
