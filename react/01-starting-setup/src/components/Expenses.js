// import ExpenseItems from './components/ExpenseItems';
import ExpenseItems from './ExpenseItems';
import '../css/Expenses.css';

function Expenses({ expenses }) {
  // console.log(expenses);
  return (
    <div className="expenses">
      <ExpenseItems
        // expenses={expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default Expenses;
