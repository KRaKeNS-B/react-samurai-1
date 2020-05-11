import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = props => {
  let state = props.state

  let dialogsElements = state.dialogs.map( dialog =>
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
    />
  )
  let messagesElements = state.messages.map( message =>
    <Message
      message={message.message}
      id={message.id}
      key={message.id}
    />
  )

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs
