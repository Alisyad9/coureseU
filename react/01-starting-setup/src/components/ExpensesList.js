import React from 'react';
import ExpenseItems from './ExpenseItems';
import '../css/ExpensesList.css';
const ExpensesList = ({ filteredExpenses }) => {
  // if (filteredExpenses.l) {
  //   return <h2 className="expenses-list__fallback"> Found no expenses</h2>;
  // }

  let expensesContent = (
    <h2 className="expenses-list__fallback" style={{ color: 'white' }}>
      Nothing 📭
    </h2>
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
