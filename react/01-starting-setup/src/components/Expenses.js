// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';
import Card from './Card';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItems';

function Expenses({ expenses }) {
  console.log(expenses.map((list) => list.title));
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
        {expenses.map((expenses) => (
          <ExpenseItems
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        {/* <ExpenseItems
          // expenses={expenses}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItems
          // expenses={expenses}

          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItems
          // expenses={expenses}

          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        /> */}
      </Card>{' '}
    </>
  );
}

export default Expenses;
