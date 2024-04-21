import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";

function SearchBooks({ handleSearch }) {
  const [title, setTitle] = useState("");
  const [book, setBook] = useState(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
    setBook(null); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/books/${title}`)
      .then((res) => {
        setBook(res.data); 
        handleSearch([res.data]); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="text">
        <h1 className="secondary-heading mt-4">Search Book ID</h1>
      </div>
      <div className="header">
        <div className="underline mb-4"></div>
      </div>
      <Form onSubmit={handleSubmit} className="row">
        <Form.Group controlId="title" className="col-md-6">
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter Title"
          />
        </Form.Group>
        <Col md={3}>
          <Button variant="success" type="submit" className="w-100">
            Search
          </Button>
        </Col>
        <Form.Group controlId="bookId" className="col-md-3">
          <Form.Control
            type="text"
            name="bookId"
            value={book ? book.id : ""}
            readOnly
            placeholder="Book ID"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBooks;