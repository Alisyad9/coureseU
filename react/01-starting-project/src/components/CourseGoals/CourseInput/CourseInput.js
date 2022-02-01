import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div/*css*/ `
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold 2rem;
//     display: blue;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   &.input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: orange;
//     background: rgb(235, 191, 111);
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

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
      <div
        className={`${styles.form_control} ${!userSubmitted && styles.invalid}`}
        // className={` ${!userSubmitted ? 'invalid' : ''}`}
      >
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
