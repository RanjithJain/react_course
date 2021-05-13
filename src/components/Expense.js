import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import "./Expense.css";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenseitems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expensefiltered) => (
        <ExpenseItems
          key={expensefiltered.id}
          date={expensefiltered.date}
          title={expensefiltered.title}
          amount={expensefiltered.amount}
        />
      ))}
    </div>
  );
}
export default Expense;
