import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

import { useRef } from "react";

export const AddExpense = ({ addExpenses }) => {
  const descriptionInput = useRef();
  const dateInput = useRef();
  const amountInput = useRef();

  function handleExpense() {
    let timestamp = new Date(dateInput.current.value).getTime();
    addExpenses({
      description: String(descriptionInput.current.value),
      amount: Number(amountInput.current.value),
      date: timestamp,
    });
  }

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Expense</InputGroup.Text>
      <FloatingLabel controlId="floatingInput" label="expense description">
        <Form.Control
          aria-label="With textarea"
          placeholder="expense description"
          // editObject.description ?. value={editObject.description}:value={""}//
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
  );
};
