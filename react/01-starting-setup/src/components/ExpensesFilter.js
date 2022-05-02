import React from 'react';

import '../css/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // console.log('props in expensefilter0', props);
  // console.log(props.filterYear);
  // function selectHandler(e) {
  //   console.log(e.target.value);
  //   props.setfilterYear(e.target.value);
  // }

  // expenses
  function dropDownChangeHandler(e) {
    console.log(e.target.value);
    props.ongChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.filterYear}
          // onChange={selectHandler}
          onChange={dropDownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
