import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

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

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    const body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea
              value={ state.newMessageBody }
              placeholder='Enter your message'
              onChange={ onNewMessageChange }
            />
          </div>
          <div>
            <button onClick={ onSendMessageClick } >Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
