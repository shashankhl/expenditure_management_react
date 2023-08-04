// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const intialExpenses = [
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
    date: new Date(2021, 7, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(intialExpenses);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    // console.log("in app js");
    // console.log(expense);
    setExpenses([expense, ...expenses]);
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
