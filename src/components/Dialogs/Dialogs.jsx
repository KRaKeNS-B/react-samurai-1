import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map( dialog =>
    <DialogItem
      name={dialog.name}
      id={dialog.id}
      key={dialog.id}
    />
  )
  let messagesElements = props.state.messages.map( message =>
    <Message
      message={message.message}
      id={message.id}
      key={message.id}
    />
  )

  let newMessage = React.createRef()
  let sendMessage = () => {
    let text = newMessage.current.value
    alert(text)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
        <div>
          <div>
            <textarea ref={ newMessage } ></textarea>
          </div>
          <div>
            <button onClick={ sendMessage }>Add post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
