import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    { id: '1', name: 'Dimych' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Mary' },
    { id: '4', name: 'Sveta' },
  ]
  let messagesData = [
    { id: '1', message: 'Hi'},
    { id: '2', message: 'How are you?'},
    { id: '3', message: 'Yo'},
    { id: '4', message: 'Yo'},
    { id: '5', message: 'Yo'},
  ]

  let dialogsElements = dialogsData.map( dialog =>
    <DialogItem
      name={dialog.name}
      key={dialog.id}
    />
  )
  let messagesElements = messagesData.map( message =>
    <Message
      message={message.message}
      key={message.id}
    />
  )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs
