import React from 'react';
import classes from '../style/AddUser.module.css';

const AddUser = () => {
  const [userName, setUserName] = React.useState('');
  const [age, setAge] = React.useState('');
  console.log(userName);
  console.log(age);

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    setUserName('');
    setAge('');
  };
  return (
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
      <button type="submit " className={classes.sumbit}>
        {' '}
        submit
      </button>{' '}
      <span
        className={classes.tooltip}
        data-tooltip="Make sure all the fields are filled"
      >
        ?
      </span>
      <div className={classes.test}>test</div>
    </form>
  );
};
export default AddUser;
