import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  return (
    <div>
      {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode} >{props.status}</span>
        </div>
      :
        <div>
          <input autoFocus={true} onBlur={deactivateEditMode} value={props.status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatus
