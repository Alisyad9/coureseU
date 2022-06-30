import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

// will now be using the useContext hook.
const Navigation = (props) => {
  const contextData = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(contextData) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Welcome Sir/Madam</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  //     }}
  //   </AuthContext.Consumer>
  // );
};

export default Navigation;
