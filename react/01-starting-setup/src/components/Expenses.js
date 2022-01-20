// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';
import Card from './Card';
import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [filterYear, setfilterYear] = useState('2021');

  const filterChange = (year) => {
    console.log('expense.js');
    setfilterYear(year);
  };

  // props.items.filter((expense) => console.log(expense.date.getFullYear()));

  /* making the filter function */

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filterYear)
  );

  /* the expense content */

  // let expensesContent = (
  //   <p style={{ color: 'white' }}>nothing has been found</p>
  // );

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense, index) => (
  //     <ExpenseItems
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <>
      <Card className="expenses1">
        <ExpensesFilter
          ongChangeFilter={filterChange}
          filterYear={filterYear}
          setfilterYear={setfilterYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />

        {/* {filteredExpenses.length === 0 && (
          <p style={{ color: 'white' }}>nothing has been found</p>
        )} */}
        {/* {filteredExpenses.length === 0 && expensesContent} */}
        {
          // filteredExpenses.length === 0 ? (
          //   <p style={{ color: 'white' }}>nothing has been found</p>
          // ) :
          // filteredExpenses.length > 0 && expensesContent
          // expensesContent
        }
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
