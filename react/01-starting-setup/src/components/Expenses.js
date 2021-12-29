// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import ExpensesFilter from './ExpensesFilter';
import '../css/Expenses.css';
import Card from './Card';

function Expenses({ expenses }) {
  console.log(expenses.map((list) => list));

  return (
    <>
      <Card className="expenses">
        <ExpenseItems
          // expenses={expenses}
          title={expenses[1].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
      </Card>{' '}
      <div>
        <ExpensesFilter />
      </div>
    </>
  );
}

export default Expenses;
