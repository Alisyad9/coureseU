import Test from './components/Test';
import ExpenseItem from './components/ExpenseItems';

function App() {
  // const expenses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const expenses = [
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
  return (
    <div>
      {/* <h2>Let's get started!</h2>
      <p>this is visible</p> */}
      <ExpenseItem
        expenses={expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      {/* <Test /> */}
    </div>
  );
}

export default App;
