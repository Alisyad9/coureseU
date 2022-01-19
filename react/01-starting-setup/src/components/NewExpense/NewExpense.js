import React, { useState } from 'react';
import '../../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [buttonExpense, setButtonExpense] = useState(false);
  // console.log('props inside new expense', props.onAddExpense());

  const onSaveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,

      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setButtonExpense(false);
    // console.log('new Expense, esxpenseData result submitted', expenseData);
  };

  function buttonClick(e) {
    console.log(e.target.value);

    setButtonExpense(true);
  }
  console.log('buttonExpense value--->', buttonExpense);
  return (
    <div className="new-expense">
      {!buttonExpense && (
        <button value={buttonExpense} onClick={buttonClick}>
          Add a new expense
        </button>
      )}

      {buttonExpense && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          newButtonExpense={setButtonExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
