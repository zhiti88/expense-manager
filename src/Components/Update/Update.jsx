import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
  const descriptionInput = useRef();
  const dateInput = useRef();
  const amountInput = useRef();
  const navigate = useNavigate();

  const { id } = useParams();
  const localStorageExpenses =
    JSON.parse(localStorage.getItem("expenses")) || [];
  const [allExpenses, setAllExpenses] = useState(localStorageExpenses);

  /*  const [value, setValue] = useState({
    id: id,
    description: "",
    date: "",
    amount: null,
  }); */
  let filteredExpense = allExpenses.filter((expense) => 
    expense.id === id
);
  console.log(id);
  console.log(filteredExpense.description);
  console.log("object :", filteredExpense);

  const handleUpdate = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Modifica elementi</h1>
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
        <Button type="button" onClick={(e) => handleUpdate()}>
          Update Expense
        </Button>
      </InputGroup>
    </>
  );
}
