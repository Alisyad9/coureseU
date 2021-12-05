import React from 'react';
import '../../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      {/* <form>yes</form>
      <button> change </button> */}
    </div>
  );
};

export default NewExpense;
