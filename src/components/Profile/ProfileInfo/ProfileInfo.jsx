import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={styles.descriptionBlock} >
        <img src={ profile.photos.large } alt="" />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo
