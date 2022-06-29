import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
// import { useId } from "react";
// import { func } from "prop-types";

function App() {
  const [expenses,setExpenses] = useState([
    { key: 0 },
    {
      key: 1,
      title: "Phone Recharge",
      cost: 100,
      date: new Date("2022-05-19"),
    },
    {
      key: 2,
      title: "Petrol",
      cost: 500,
      date: new Date("2022-05-29"),
    },
  ]);
  // const ID = useId();

  function onAdd(expense) {
    let key = expenses[expenses.length - 1].key + 1;
  // console.log(key);
    let obj = {...expense, key:key, date:new Date(expense.date)};
    console.log(obj);
    setExpenses((prev)=>{
      return [...prev, obj];
    })
  }
  // console.log(expenses);
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <p>First app of this course</p>
      <NewExpense addExpense={onAdd} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
