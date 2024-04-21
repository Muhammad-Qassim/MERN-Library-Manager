import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function AvailableBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    axios
      .get("http://localhost:3000/books?status=true")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

    return (
        <div>
        <h1 className="secondary-heading mt-4 mb-3">Available Books</h1>
        <ul className="list-group list-group-horizontal header" >
                <li className="list-group-item item w-25">ID</li>
                <li className="list-group-item item">Title</li>
                <li className="list-group-item item">Author</li>
                <li className="list-group-item item">ISBN</li>
            </ul>
        <ul className="list-group">
            {books.map((book) => (
            <ul className="list-group list-group-horizontal" >
                <li className="list-group-item item w-25">{book.id}</li>
                <li className="list-group-item item">{book.title}</li>
                <li className="list-group-item item">{book.author}</li>
                <li className="list-group-item item">{book.ISBN}</li>
            </ul>
            ))}
        </ul>
        </div>
    );

}

export default AvailableBookList;
