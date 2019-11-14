import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = (props) => (
  <button type="button" onClick={props.firebase.doSignOut}>
    Sign Out
        {console.log('from signout: ', props.firebase)}
  </button>
);
export default withFirebase(SignOutButton);