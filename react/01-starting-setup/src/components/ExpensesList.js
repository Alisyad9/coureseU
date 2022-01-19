import React from 'react';
import ExpenseItems from './ExpenseItems';
import '../css/ExpensesList.css';
const ExpensesList = ({ filteredExpenses }) => {
  let expensesContent = (
    <p style={{ color: 'white' }}>nothing has been found</p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, index) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
