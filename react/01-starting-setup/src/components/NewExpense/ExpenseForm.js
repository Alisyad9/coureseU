import React from 'react'; //not actually required

import '../../css/ExpenseForm.css';
const ExpenseForm = () => {
  const [title, setTitle] = React.useState('');

  function onClickHandler(e) {
    // console.log('this is the event =>', e.target.value);

    return setTitle(e.target.value);
  }

  console.log('title value ---> ', title);

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onClickHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="Number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-12-12" step="2022-12-12" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
