import React, { useState, useEffect } from 'react';
// import classes from './ProfileInfo.module.css'

const ProfileStatus = ({updateStatus, status: incomingStatus, isOwner}) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(incomingStatus)

  useEffect(() => {
    setStatus(incomingStatus)
  }, [incomingStatus])

  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true)
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(status)
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div>
      {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode} >{status || '---------'}</span>
        </div>
      :
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatus
