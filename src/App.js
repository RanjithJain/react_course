import { useState } from "react";
import Expense from "./components/Expense";
import ExpenseAddButton from "./components/ExpenseAddButton";
import NewExpense from "./components/NewExpense";
const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY);
  const [newFormButton, setNewFormButton] = useState(true);
  const addExpenseHandler = (expense) => {
    console.log("App js");
    console.log(JSON.stringify(expense));
    if (expense) {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    } else {
      setNewFormButton(!newFormButton);
    }
  };

  const addExpenseButtonHandler = () => {
    setNewFormButton(!newFormButton);
  };
  return (
    <div>
      {newFormButton ? (
        <ExpenseAddButton onAddButton={addExpenseButtonHandler} />
      ) : (
        <NewExpense
          onAddExpense={addExpenseHandler}
          onAddButton={addExpenseButtonHandler}
        />
      )}

      <Expense expenseitems={expenses} />
    </div>
  );
}

export default App;
