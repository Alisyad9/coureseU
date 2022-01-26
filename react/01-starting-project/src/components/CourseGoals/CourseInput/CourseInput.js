import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [userSubmitted, setUserSubmitted] = useState(true);

  console.log(userSubmitted);

  const goalInputChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
      setUserSubmitted(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      console.log('it works fine');
      setUserSubmitted(false);
      return 'lol';
    }
    setUserSubmitted(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} value={userSubmitted}>
      <div className={`form-control ${!userSubmitted ? 'invalid' : ''}`}>
        <label
        // style={{ color: !userSubmitted ? 'red' : 'green' }}
        >
          Course Goal
        </label>
        <input
          // style={{
          //   borderColor: !userSubmitted ? 'red' : 'green',
          //   backgroundColor: !userSubmitted ? 'red' : 'transparent',
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
