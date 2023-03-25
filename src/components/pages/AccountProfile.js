import React from 'react';
import Profile from '../Dashboard/Profile';
import classes from '../Dashboard/Profile.module.css'

const AccountProfile = () => {
  return (
    <>
    <div className={classes.heading}>
    <h1>AccountProfile page</h1>
    </div>
    <Profile  />
    </>
  )
}


export default AccountProfile;