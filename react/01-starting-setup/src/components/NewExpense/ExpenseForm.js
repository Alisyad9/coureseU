import React from 'react'; //not actually required

import '../../css/ExpenseForm.css';
const ExpenseForm = () => {
  // const [title, setTitle] = React.useState('');
  // const [amount, setAmount] = React.useState('');
  // const [date, setDate] = React.useState('');
  const [userInput, setUserInput] = React.useState({
    title: '',
    amount: '',
    date: '',
  });

  const onClickHandler = (e) => {
    // console.log('this is the event =>', e.target.value);

    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    setUserInput((previousState) => {
      return {
        ...previousState,
        title: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    console.log('amount Change Handler --->');
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    // console.log('amount Change Handler --->');

    setUserInput((previousState) => {
      return {
        ...previousState,
        date: e.target.value,
      };
    });
  };

  console.log('amount Input ---> ', userInput.amount);
  console.log('date value ---> ', userInput.date);
  console.log('tile value ---> ', userInput.title);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onClickHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-12-12"
            step="2022-12-12"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
