import React, { useState } from 'react'
import userPhoto from '../../../assets/images/user.png'
import Preloader from '../../common/Preloader/Preloader'
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false)
      })
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

        { editMode
          ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} />
          : <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
        }

        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    { isOwner &&
      <div>
        <button onClick={goToEditMode} >Edit</button>
      </div>
    }
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
    </div>
    { profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contacts = ({contactTitle, contactValue}) => {
  return <div className={styles.contact} ><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo
