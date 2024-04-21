import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function CheckingoutBooks({ fetchBooks, fetchCheckedOutBooks }) {
  const [bookId, setBookId] = useState("");
  const [checkedOutBy, setCheckedOutBy] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "bookId") {
      setBookId(e.target.value);
    } else if (e.target.name === "checkedOutBy") {
      setCheckedOutBy(e.target.value);
    } else if (e.target.name === "dueDate") {
      setDueDate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/books/checkout/${bookId}`, {
        checkedOutBy,
        dueDate,
      })
      .then(() => {
        fetchBooks();
        fetchCheckedOutBooks();
        setBookId("");
        setCheckedOutBy("");
        setDueDate("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-3">
      <div className="text">
        <h1 className="secondary-heading mt-4">Checkout Book</h1>
      </div>
      <div className="header">
        <div className="underline mb-4"></div>
      </div>
      <Form onSubmit={handleSubmit} className="row">
        <Form.Group controlId="bookId" className="col-md-3 ">
          <Form.Control
            type="text"
            name="bookId"
            value={bookId}
            onChange={handleChange}
            placeholder="Enter book ID"
          />
        </Form.Group>
        <Form.Group controlId="checkedOutBy" className="col-md-3">
          <Form.Control
            type="text"
            name="checkedOutBy"
            value={checkedOutBy}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group controlId="dueDate" className="col-md-3">
          <Form.Control
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={handleChange}
            placeholder="Enter due date"
          />
        </Form.Group>
        <div className="col-md-3">
          <Button variant="success" type="submit" className="w-100">
            Check Out
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CheckingoutBooks;
