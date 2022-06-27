import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

///reduce function can be outside the scope of the login component, because it does not need to interact with anything inside the function
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.val, isValid: state.val.includes('@') };
  }
  return { value: '', isValid: false };
};
////passwordReducer function
// const passwordReducer = (state, action) => {
//   if (action.type === 'USER_INPUT') {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return { value: state.val, isValid: state.val.trim().length > 6 };
//   }
//   return { value: '', isValid: false };
// };

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatcherEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: '',
  //   isValid: null,
  // });

  //////new useEffect
  useEffect(() => {
    console.log('effect running');

    ///clean up function

    return () => {
      console.log('effect clean up');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('checking form validity');
  //     setFormIsValid(emailState.isValid && passwordState.isValid);
  //   }, 500);

  //   return () => {
  //     console.log('checkout');
  //     clearTimeout(identifier);
  //   };
  // }, [emailState, passwordState]);

  /////

  const emailChangeHandler = (event) => {
    dispatcherEmail({ type: 'USER_INPUT', val: event.target.value });
    // setEnteredEmail(event.target.value);
    setFormIsValid(
      // event.target.value.includes('@') && enteredPassword.trim().length > 6
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      // event.target.value.trim().length && enteredEmail.includes('@') > 6
      // emailState.isValid && event.target.value.trim().length > 6
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    // setEmailIsValid(emailState.isValid);
    dispatcherEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
    // dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            // emailIsValid
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            // {enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
            // passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            // value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
