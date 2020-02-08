import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="" />
      </div>
      <div className={classes.descriptionBlock} >
        <img src="https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg" alt="" />
        description
      </div>
    </div>
  )
}

export default ProfileInfo
