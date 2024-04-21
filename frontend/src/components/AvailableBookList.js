function AvailableBookList({ books }) {
  return (
    <div>
      <div className="text">
        <h1 className="secondary-heading">Available Books</h1>
      </div>
      <div className="header">
        <div className="underline"></div>
      </div>
      <ul className="list-group list-group-horizontal header">
        <li className="list-group-item item w-25">ID</li>
        <li className="list-group-item item">Title</li>
        <li className="list-group-item item">Author</li>
        <li className="list-group-item item">ISBN</li>
      </ul>
      <ul className="list-group">
        {books.map((book) => (
          <ul className="list-group list-group-horizontal">
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
