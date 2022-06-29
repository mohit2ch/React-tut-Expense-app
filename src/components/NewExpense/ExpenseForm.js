import React, { useState } from "react";


function ExpenseForm(props){
    const [expense, setExpense] = useState({
        date: "",
        title: "",
        cost: "",
      });
    function handleChange(event) {
        const { name, value } = event.target;
        // console.log(name, value
        setExpense((prev) => {
          return { ...prev, [name]: value };
        });
        // console.log(obj);
      }
      function handleClick() {
        props.addExpense(expense);
        setExpense({
          date: "",
          title: "",
          cost: "",
        });
      }
    return(
        <>
            <div className="new-expense-row">
        <label>Date : </label>
        <input
          name="date"
          type="text"
          placeholder="yyyy-mm-dd"
          className="new-expense-input"
          onChange={handleChange}
          value={expense.date}
        ></input>
      </div>
      <div className="new-expense-row">
        <label>Title : </label>{" "}
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="new-expense-input"
          onChange={handleChange}
          value={expense.title}
        ></input>
      </div>
      <div className="new-expense-row">
        <label>Expense : </label>{" "}
        <input
          name="cost"
          type="number"
          placeholder="Expense"
          className="new-expense-input"
          onChange={handleChange}
          value={expense.cost}
        ></input>
      </div>
      <button onClick={handleClick}>Add Expense</button>
        </>
    )
}
export default ExpenseForm;