import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="" />
      </div>
      <div className={classes.descriptionBlock} >
        <img src={ props.profile.photos.large } alt="" />
        description
      </div>
    </div>
  )
}

export default ProfileInfo
