import '../css/ExpenseItem.css';

function ExpenseItem({ expenses, title, amount }) {
  // console.log(title, amount);
  const map1 = new Map();
  map1.set(expenses);
  console.log(map1.forEach((list) => list));
  // console.log(map1);

  // expenses.map((list) => console.log(list.title));

  const expenseData = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 200.56;
  return (
    <div className="expense-item">
      <div>JUNE 25th {expenseData.toDateString()} </div>
      <div className="expense-item__description">
        <h2>Car Insurance {expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
