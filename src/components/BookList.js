import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Make a request to your backend API to retrieve the list of books
    // Set the state with the response data
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}






function BookListPage(props) {
  const history = useHistory();

  if (!props.authenticated) {
    history.push("/login");
  }

  // render the book list page
}

export default BookList;
