import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dialogsData = [
    { id: '1', name: 'Dimych' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Mary' },
    { id: '4', name: 'Sveta' },
    { id: '5', name: 'Vova' },
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
      id={dialog.id}
      key={dialog.id}
    />
  )
  let messagesElements = messagesData.map( message =>
    <Message
      message={message.message}
      id={message.id}
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
