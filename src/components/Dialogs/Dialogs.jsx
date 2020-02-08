import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = props => {
  let dialogsData = props.dialogs
  let messagesData = props.messages

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
