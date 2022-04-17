import React from 'react';
import classes from '../style/AddUser.module.css';
import Card from '../style/Card';
import Button from '../style/Button';
import ErrorModal from '../style/ErrorModal';

const AddUser = (props) => {
  ////////////////user state /////
  const [userName, setUserName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [error, setError] = React.useState('');
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
      setError({
        title: 'invalid input',
        message: 'enter a name',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'invalid input',
        message: 'please enter age above 0',
      });
      return;
    }
    props.onAddUser(userName, age);
    console.log(age);
    setUserName('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
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
      {error && (
        <ErrorModal
          lol={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    </div>
  );
};
export default AddUser;
