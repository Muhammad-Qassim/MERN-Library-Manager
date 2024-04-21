import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function CheckinBooks({ fetchBooks, fetchCheckedOutBooks }) {
  const [bookId, setBookId] = useState("");

  const handleChange = (e) => {
    setBookId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/books/checkin/${bookId}`)
      .then(() => {
        fetchBooks();
        fetchCheckedOutBooks();
        setBookId("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="text">
        <h1 className="secondary-heading mt-4">Check In Book</h1>
      </div>
      <div className="header">
        <div className="underline mb-4"></div>
      </div>
      <Form className="row">
        <Form.Group controlId="bookId" className="col-md-6">
          <Form.Control
            type="text"
            name="bookId"
            value={bookId}
            onChange={handleChange}
            placeholder="Book ID"
          />
        </Form.Group>
        <div className="col-md-6">
          <Button
            variant="success"
            type="submit"
            onClick={handleSubmit}
            className="w-100"
          >
            Check In
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CheckinBooks;
