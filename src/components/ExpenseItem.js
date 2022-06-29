import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function handleClick() {
    console.log("CLicked!!");
    setTitle("Updated");
  }
  return (
    <div className="expense-item">
      <div className="row">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
      </div>
      <div className="row">
        <span className="expense">Rs. {props.expense}</span>
        {/* <button onClick={handleClick}>Click Here</button> */}
      </div>
    </div>
  );
}

export default ExpenseItem;
