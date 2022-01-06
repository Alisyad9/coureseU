import Test from './components/Test';
import ExpenseItems from './components/ExpenseItems';
import Expenses from './components/Expenses';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpensesFilter';

const test_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  // const expenses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [expenses, setExpenses] = React.useState(test_expenses);

  console.log('in app.js manageExpenses value -->', expenses);

  const addExpenseHandler = (expense) => {
    // console.log('inside the App.js addExpenseHandler function ');
    // console.log('inside App.js expenses', expense);
    // setExpenses((previousExpenses) => {
    //   return [expense, ...previousExpenses];
    // });
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
    console.log('inside App.js expenses', expense);
  };

  console.log('inside app.js expenses value-->', expenses);
  return (
    <div>
      {/* <h2>Let's get started!</h2>
      <p>this is visible</p> */}
      {/* <ExpenseItems
        expenses={expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      /> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />

      {/* <Test /> */}
    </div>
  );
};

export default App;
