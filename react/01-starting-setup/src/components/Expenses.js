// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';
import Card from './Card';
import React, { useState } from 'react';

function Expenses({ expenses }) {
  console.log(expenses.map((list) => list));
  const [filterYear, setfilterYear] = useState('2021');

  const filterChange = (year) => {
    console.log('expense.js');
    setfilterYear(year);
  };

  console.log(filterYear);
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          ongChangeFilter={filterChange}
          filterYear={filterYear}
          setfilterYear={setfilterYear}
        />
        <ExpenseItems
          // expenses={expenses}
          title={expenses[1].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
      </Card>{' '}
    </>
  );
}

export default Expenses;
