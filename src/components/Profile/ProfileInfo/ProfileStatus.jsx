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
      <b>Status</b>{`: `}
      {!editMode ?
        <span onDoubleClick={activateEditMode} >{status || '---------'}</span>
      :
        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
      }
    </div>
  )
}

export default ProfileStatus
