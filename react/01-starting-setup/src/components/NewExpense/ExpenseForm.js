import React from 'react'; //not actually required

import '../../css/ExpenseForm.css';
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" className="" />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="date" className="" min="2021-12-12" max="2023-12-12" />
        </div>
      </div>
      <div>
        <button type="submit" className="new-expense__actions">
          submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
