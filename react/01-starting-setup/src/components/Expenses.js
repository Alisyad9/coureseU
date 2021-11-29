// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import '../css/Expenses.css';
import Card from './Card';

function Expenses({ expenses }) {
  console.log(expenses.map((list) => list));

  return (
    <Card className="expenses">
      <ExpenseItems
        // expenses={expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </Card>
  );
}

export default Expenses;
