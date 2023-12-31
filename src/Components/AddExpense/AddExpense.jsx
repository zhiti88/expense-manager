import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { nanoid } from "nanoid";

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddExpense = ({ addExpenses }) => {
  const localStorageExpenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  const navigate = useNavigate();
  const descriptionInput = useRef();
  const dateInput = useRef();
  const amountInput = useRef();
  const [allExpenses, setAllExpenses] = useState(localStorageExpenses);

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

  function handleExpense(id) {
    let timestamp = new Date(dateInput.current.value).getTime();
    addExpenses({
      description: String(descriptionInput.current.value),
      amount: Number(amountInput.current.value),
      date: timestamp,
    });
    navigate(-1);
  }

  return (
    <>
      <h1>Aggiungi elementi</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text>Expense</InputGroup.Text>
        <FloatingLabel controlId="floatingInput" label="expense description">
          <Form.Control
            aria-label="With textarea"
            placeholder="expense description"
            ref={descriptionInput}
          />
        </FloatingLabel>
        <InputGroup.Text>select date</InputGroup.Text>
        <Form.Control
          type="date"
          name="dob"
          placeholder="Date of Birth"
          ref={dateInput}
        />
        <InputGroup.Text>amount</InputGroup.Text>
        <FloatingLabel controlId="floatingInput" label="amount">
          <Form.Control
            aria-label="With textarea"
            placeholder="amount"
            ref={amountInput}
          />
        </FloatingLabel>
        <Button type="button" onClick={(e) => handleExpense()}>
          Add Expense
        </Button>
      </InputGroup>
    </>
  );
};
