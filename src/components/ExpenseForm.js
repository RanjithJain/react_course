import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const enteredTitle = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  const enteredAmount = (event) => {
    setAmount(event.target.value);
  };
  const enteredDate = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log("submitted" + title + " " + amount + " " + date);
    props.onSaveExpenseData(expensedata);
  };
  const onCancelHandler = (event) => {
    const expensedata = null;
    props.onSaveExpenseData(expensedata);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={enteredDate} />
        </div>
      </div>
      <div className="new-expense__control">
        <button onClick={onCancelHandler}>Cancell</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
