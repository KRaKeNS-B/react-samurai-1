import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { reduxForm, Field } from 'redux-form'

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
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          component='textarea'
          name='newMessageBody'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm'
}) (AddMessageForm)

export default Dialogs
