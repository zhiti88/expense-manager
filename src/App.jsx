import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import { AddExpense } from "./Components/AddExpense/AddExpense";
import { ExpensesList } from "./Components/ExpensesList/ExpensesList";
import { FilterExpense } from "./Components/FilterExpense/FilterExpense";

function App() {
  const localStorageExpenses =
    JSON.parse(localStorage.getItem("expenses")) || [];
  const [allExpenses, setAllExpenses] = useState(localStorageExpenses);

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null,
  });
  const [editObject, SetEditObject] = useState(null);

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

  function addExpenses(expense) {
    const newExpense = {
      ...expense,
      id: "exspense-" + nanoid(),
    };
    setAllExpenses([...allExpenses, newExpense]);
  }

  function deleteExpense(id) {
    let updatedExpenses = allExpenses.filter((expense) => expense.id !== id);
    setAllExpenses(updatedExpenses);
  }

  function editExpense(id) {
    let toEditExpense = allExpenses.filter((expense) => expense.id === id);
    SetEditObject(toEditExpense);
  }
  console.log(editObject);

  return (
    <>
      <h1>Expense-manager</h1>
      <AddExpense addExpenses={addExpenses} editObject={editObject} />
      <h1>Expense Filter</h1>
      <FilterExpense setDateFilter={setDateFilter} />
      <h1>Expense list</h1>
      <ExpensesList
        allExpenses={filteredExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
        totalAmount={totalAmount}
      />
    </>
  );
}

export default App;
