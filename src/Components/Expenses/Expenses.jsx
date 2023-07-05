import ListGroup from "react-bootstrap/ListGroup";

export const Expenses = ({ singleExpense }) => {
  console.log(singleExpense.amount);
  return (
    <>
      <ListGroup horizontal className="my-4 justify-content-center ">
        <ListGroup.Item>{singleExpense.description}</ListGroup.Item>
        <ListGroup.Item>{singleExpense.amount}</ListGroup.Item>
        <ListGroup.Item>{3} </ListGroup.Item>
      </ListGroup>
    </>
  );
};
