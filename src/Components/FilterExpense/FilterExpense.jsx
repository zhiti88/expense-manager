import React, { useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FilterExpense = ({ setDateFilter }) => {
  const startDateInput = useRef();
  const endDateInput = useRef();

  function handleFilterExpense() {
    let startDate = new Date(startDateInput.current.value).getTime();
    let endDate = new Date(endDateInput.current.value).getTime();

    setDateFilter({ startDate, endDate });
  }
  function resetFilter() {
    (startDateInput.current.value = ""), (endDateInput.current.value = "");
    setDateFilter({
      startDate: null,
      endDate: null,
    });
  }
  return (
    <InputGroup className="mb-5">
      <InputGroup.Text>selct date from</InputGroup.Text>
      <Form.Control type="date" name="dob" ref={startDateInput} />
      <InputGroup.Text>selct date to</InputGroup.Text>
      <Form.Control type="date" name="dob" ref={endDateInput} />
      <Button
        type="button"
        variant="success"
        onClick={(e) => handleFilterExpense()}
      >
        Filter Expense
      </Button>
      <Button type="button" variant="warning" onClick={(e) => resetFilter()}>
        Clear
      </Button>
    </InputGroup>
  );
};
