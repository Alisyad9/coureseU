import React from 'react';
import classes from '../style/AddUser.module.css';
import Card from '../style/Card';
import Button from '../style/Button';

const AddUser = () => {
  ////////////////user state /////
  const [userName, setUserName] = React.useState('');
  const [age, setAge] = React.useState('');

  ////////////user state ending  /////

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(userName);
    console.log(age);
    setUserName('');
    setAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameHandler}
          value={userName}
          placeholder="enter username"
        />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={ageHandler} value={age} />
        <Button type="submit " className={classes.sumbit}>
          {' '}
          submit
        </Button>{' '}
        <span
          className={classes.tooltip}
          data-tooltip="Make sure all the fields are filled"
        >
          ?
        </span>
      </form>
    </Card>
  );
};
export default AddUser;
