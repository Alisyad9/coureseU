import '../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, { useState } from 'react';

const list = ['chicken', 'beef', 'lamp'];

function ExpenseItem({ title, amount, date }) {
  const [newtitle, setTitle] = useState(title); //hooks inside the component function

  // console.log(title);
  function click() {
    setTitle(list.map((result) => result[0]));

    console.log(newtitle);
  }
  // // console.log(title, amount);
  // const map1 = new Map();
  // map1.set(expenses);
  // console.log(map1.forEach((list) => list));
  // // console.log(map1);

  // // expenses.map((list) => console.log(list.title));

  // const expenseData = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 200.56;
  // const month = date.toLocaleString('en-US', { month: 'long' });
  // const day = date.toLocaleString('en-US', { day: '2-digit' });
  // const year = date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newtitle}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={click}> change tittle</button>
    </Card>
  );
}

export default ExpenseItem;
