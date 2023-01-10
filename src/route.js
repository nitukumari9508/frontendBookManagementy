import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookEdit from './components/BookEdit';
import BookCreate from './components/BookCreate';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/books" exact component={BookList} />
      <Route path="/books/:id" exact component={BookDetails} />
      <Route path="/books/:id/edit" exact component={BookEdit} />
      <Route path="/books/create" exact component={BookCreate} />
    </Router>
  );
};

export default Routes;
