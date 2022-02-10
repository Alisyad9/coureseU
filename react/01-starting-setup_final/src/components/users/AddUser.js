import React from 'react';

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
      />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" onChange={ageHandler} value={age} />
      <button type="submit"> submit</button>
    </form>
  );
};
export default AddUser;
