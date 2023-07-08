import { useState, useEffect } from "react";

import "./App.css";

import { ExpensesList } from "./Components/ExpensesList/ExpensesList";
import { FilterExpense } from "./Components/FilterExpense/FilterExpense";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

function App() {
  const localStorageExpenses =
    JSON.parse(localStorage.getItem("expenses")) || [];
  const [allExpenses, setAllExpenses] = useState(localStorageExpenses);

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null,
  });

  let filteredExpenses = allExpenses
    .filter((expense) => {
      if (dateFilter.startDate && dateFilter.endDate) {
        return (
          expense.date >= dateFilter.startDate &&
          expense.date <= dateFilter.endDate
        );
      } else {
        return expense;
      }
    })
    .sort((a, b) => a.date - b.date);

  let totalAmount = filteredExpenses.reduce((sum, expense) => {
    return expense.amount + sum;
  }, 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  }, [allExpenses]);

  function deleteExpense(id) {
    let updatedExpenses = allExpenses.filter((expense) => expense.id !== id);
    setAllExpenses(updatedExpenses);
  }

  return (
    <>
      <h1>Expense-manager</h1>

      <h1>Expense Filter</h1>
      <FilterExpense setDateFilter={setDateFilter} />
      <h1>Expense list</h1>
      <ExpensesList
        allExpenses={filteredExpenses}
        deleteExpense={deleteExpense}
        totalAmount={totalAmount}
      />
    </>
  );
}

export default App;
