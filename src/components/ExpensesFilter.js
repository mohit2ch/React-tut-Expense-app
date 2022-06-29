import React from 'react';
import './ExpensesFilter.css';
// import {useState} from 'react';
const ExpensesFilter = (props) => {
  function handleChange(event){
    const val = event.target.value;
    console.log(val);
    props.onChangeYear(val);
    
  }
  // const [year, setYear] = useState('2019')
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;