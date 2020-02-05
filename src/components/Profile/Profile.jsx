import React from 'react';
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt=""/>
      </div>
      <div>
        <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt=""/>
        description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
