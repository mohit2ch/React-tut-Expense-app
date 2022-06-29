import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

  const [state, setState] = useState('hide');

  function addExpense(expense){
    props.addExpense(expense);
  }
  if(state === 'hide'){
    return (
      <div className="new-expense">
      <button onClick={()=>{setState('show')}}>Add New Expense</button>
    </div>
    );
  }
  else{
    return (
      <div className="new-expense">
        <ExpenseForm addExpense={addExpense} />
        <button onClick={()=>{setState('hide')}}>Hide</button>
      </div>
    );
  }
  
}

export default NewExpense;
