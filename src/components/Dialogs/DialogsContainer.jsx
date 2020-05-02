// import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer
