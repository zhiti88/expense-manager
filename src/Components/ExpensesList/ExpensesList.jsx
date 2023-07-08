import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { format } from "date-fns";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const ExpensesList = ({
  allExpenses,
  deleteExpense,
  totalAmount,
}) => {
  /*   const totale = allExpenses.amount.filter((a, b) => a + b); */
  const currentDate = new Date();
  let formatedCurrentDate = format(currentDate, "dd-MMM-yyyy");

  const table = allExpenses.map((singleExpense) => {
    let date = new Date(singleExpense.date);
    let formatedDate = format(date, "dd-MMM-yyyy");
    let index = allExpenses.indexOf(singleExpense) + 1;

    return (
      <tr key={singleExpense.id}>
        <td>{index}</td>
        <td>{singleExpense.description}</td>
        <td>{singleExpense.amount} $</td>
        <td>{formatedDate}</td>
        <td>
          {" "}
          <Button
            variant="outline-danger"
            onClick={() => deleteExpense(singleExpense.id)}
          >
            x
          </Button>
        </td>
        <td>
          <Link className="btn btn-info" to={`/update/${singleExpense.id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          {/*           <Button
            variant="outline-info"
            onClick={() => editExpense(singleExpense.id)}
          >
            edit
          </Button> */}
        </td>
      </tr>
    );
  });

  return (
    <>
      <Link className="btn btn-info" to="/addExpense">
        AddExpense
      </Link>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
        <tfoot>
          <tr>
            <td>
              <div>Total</div>
              {allExpenses.length}
            </td>
            <td></td>
            <td>
              <strong>Total Amount : {totalAmount} $</strong>
            </td>
            <td>
              <strong>{formatedCurrentDate}</strong>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  );
};
