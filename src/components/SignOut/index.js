import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
        {console.log('from signout: ', firebase)}
  </button>
);
export default withFirebase(SignOutButton);