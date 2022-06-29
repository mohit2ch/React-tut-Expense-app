import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./ExpenseList.css";
import NoExpense from "./NoExpense";
import ExpenseChart from "./ExpenseChart";



function ExpenseList(props) {
  const [year, setYear] = useState('2022');
  const list = props.expenses.filter((ele, index) => {
    return index > 0 && ele.date.getFullYear() === parseInt(year);
  });
  if (list.length > 0) {
    return (
      <div className="expense-list">
        <ExpensesFilter
          onChangeYear={(year) => {
            setYear(year);
          }}
        />
        <ExpenseChart expenses = {list}/>
        {list.map((ele) => {
          return (
            <ExpenseItem title={ele.title} expense={ele.cost} date={ele.date} />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="expense-list">
        <ExpensesFilter
          onChangeYear={(year) => {
            setYear(year);
          }}
        />
        <ExpenseChart expenses = {list}/>
        <NoExpense />
      </div>
    );
  }
}

export default ExpenseList;
