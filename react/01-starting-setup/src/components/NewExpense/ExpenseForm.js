import React from 'react'; //not actually required

import '../../css/ExpenseForm.css';
const ExpenseForm = (props) => {
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState('');
  // const [userInput, setUserInput] = React.useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const onClickHandler = (e) => {
    // console.log('this is the event =>', e.target.value);

    setTitle(e.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     title: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    console.log('amount Change Handler --->');
    setAmount(e.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     amount: e.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (e) => {
    // console.log('amount Change Handler --->');
    setDate(e.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     date: e.target.value,
    //   };
    // });
  };

  // console.log('amount Input ---> ', userInput.amount);
  // console.log('date value ---> ', userInput.date);
  // console.log('tile value ---> ', userInput.title);
  ////////////////////////////////////////////////////////////////
  const submitHandler = (e) => {
    //stays on the current page without sending any information, to be submitted
    e.preventDefault();
    // console.log('inside the submit handler userInput---->', userInput);

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // const expenseData = {
    //   ...userInput,
    // };
    // console.log('inside submitHandler, expenseData', expenseData);
    // setUserInput({ title: '', amount: '', date: '' });

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setDate('');
    setAmount('');
  };

  const cancelHandler = () => {
    console.log('cancelHandler inside expenseForm.js');
    props.newButtonExpense(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // value={userInput.title}
            value={title}
            onChange={onClickHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            // value={userInput.amount}
            value={amount}
            type="Number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            // value={userInput.date}
            value={date}
            type="date"
            min="2021-12-12"
            step="2022-12-12"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// import React, { useState } from 'react';

// import '../../css/ExpenseForm.css';

// const ExpenseForm = (props) => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredTitle: event.target.value,
//     // });
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.target.value,
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };

//     props.onSaveExpenseData(expenseData);
//     setEnteredTitle('');
//     setEnteredAmount('');
//     setEnteredDate('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             value={enteredAmount}
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             value={enteredDate}
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
