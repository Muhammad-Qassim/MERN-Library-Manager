

function CheckedoutBookList({checkedOutBooks}) {

  return (
    <div>
      <h1 className="secondary-heading mt-4 mb-3">  Checked Out Books</h1>
      <ul className="list-group list-group-horizontal header">
        <li className="list-group-item item w-25">ID</li>
        <li className="list-group-item item">Title</li>
        <li className="list-group-item item">Author</li>
        <li className="list-group-item item">Checkedout By</li>
        <li className="list-group-item item">Due Date</li>
      </ul>
      <ul className="list-group">
        {checkedOutBooks.map((book) => (
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item item w-25">{book.id}</li>
            <li className="list-group-item item">{book.title}</li>
            <li className="list-group-item item">{book.author}</li>
            <li className="list-group-item item">{book.checkedOutBy}</li>
            <li className="list-group-item item">{book.dueDate}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default CheckedoutBookList;
