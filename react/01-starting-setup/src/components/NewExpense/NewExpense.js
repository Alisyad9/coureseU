import React from 'react';
import '../../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  console.log('props inside new expense', props);

  // console.log('props inside new expense', props.onAddExpense());

  const onSaveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,

      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log('new Expense, esxpenseData result submitted', expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
