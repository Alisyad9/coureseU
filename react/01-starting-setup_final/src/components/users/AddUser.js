import React from 'react';
import style from '../style/AddUser.css';

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
      <button type="submit " className="sumbit">
        {' '}
        submit
      </button>{' '}
      <span
        id={style.anim}
        className="tooltip"
        data-tooltip="username must consist of 29 symbols."
      >
        ?
      </span>
    </form>
  );
};
export default AddUser;
