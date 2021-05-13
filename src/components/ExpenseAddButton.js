import "./ExpenseAddButton.css";

import React from "react";
import "./ExpenseAddButton.css";
function ExpenseAddButton(props) {
  const addExpense = () => {
    props.onAddButton();
  };

  return (
    <div className="new-expense">
      <button type="submit" onClick={addExpense}>
        Add New Expense
      </button>
    </div>
  );
}

export default ExpenseAddButton;
