import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
          Dimych
        </div>
        <div className={classes.dialog}>
          Andrey
        </div>
        <div className={classes.dialog}>
          Mary
        </div>
        <div className={classes.dialog}>
          Sveta
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you?</div>
        <div className={classes.message}>Yo</div>
      </div>
    </div>
  )
}

export default Dialogs
