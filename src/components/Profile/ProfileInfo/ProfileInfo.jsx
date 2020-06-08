import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={styles.descriptionBlock} >
        <img
          src={ profile.photos.large || userPhoto}
          alt=""
          className={styles.mainPhoto}
        />
        { isOwner && <input type="file" onChange={onMainPhotoSelected} /> }
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
    </div>
  )
}

export default ProfileInfo
