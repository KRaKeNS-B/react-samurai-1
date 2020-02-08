import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/dialogs/1'>Dimych</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/2'>Andrey</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/3'>Mary</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/4'>Sveta</NavLink>
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
