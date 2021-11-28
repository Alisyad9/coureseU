import '../css/ExpenseItem.css';

function ExpenseItem({ expenses, title, amount, date }) {
  // // console.log(title, amount);
  // const map1 = new Map();
  // map1.set(expenses);
  // console.log(map1.forEach((list) => list));
  // // console.log(map1);

  // // expenses.map((list) => console.log(list.title));

  // const expenseData = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 200.56;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  console.log(year);

  return (
    <div className="expense-item">
      <div>
        <div>
          {month} {''}
        </div>
        <div> {day}</div>
        <div> {year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
