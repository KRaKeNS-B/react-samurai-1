import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (body) => {
    const action = updateNewMessageBodyCreator(body)
    props.store.dispatch(action)
  }

  return (
    <Dialogs
      updateNewMessageBody={ onNewMessageChange }
      sendMessage={ onSendMessageClick }
      state={ state }
    />
  )
}

export default DialogsContainer
