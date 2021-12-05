import React from 'react'; //not actually required

import '../../css/ExpenseForm.css';
const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" className="" />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
