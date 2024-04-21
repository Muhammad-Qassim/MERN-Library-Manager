import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function AddBooks({ setBooks }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    ISBN: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/books", book)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, res.data]);
        setBook({ title: "", author: "", publisher: "", ISBN: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
<div>
  <h1 className="secondary-heading mt-4 mb-3">Add Book</h1>
  <Form onSubmit={handleSubmit} className="row">
    <Form.Group controlId="title" className="col-md-3">
      <Form.Control
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
      />
    </Form.Group>
    <Form.Group controlId="author" className="col-md-2">
      <Form.Control
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
      />
    </Form.Group>
    <Form.Group controlId="publisher" className="col-md-2">
      <Form.Control
        type="text"
        name="publisher"
        value={book.publisher}
        onChange={handleChange}
        placeholder="Publisher"
      />
    </Form.Group>
    <Form.Group controlId="ISBN" className="col-md-2">
      <Form.Control
        type="text"
        name="ISBN"
        value={book.ISBN}
        onChange={handleChange}
        placeholder="ISBN"
      />
    </Form.Group>
    <div className="col-md-3">
      <Button variant="success" type="submit" className="w-100">
        Add Book
      </Button>
    </div>
  </Form>
</div>
  );
}

export default AddBooks;