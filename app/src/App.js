import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux';

import {fetchAllUsers} from "./actions/userAction";
import './App.css';
import Container from './containers/Container'

const App = ({fetchAllUsersConnect}) => {
  useEffect(() => {
    fetchAllUsersConnect();
  },[fetchAllUsersConnect]);

  return (
      <Router>
        <div className="container">
          <Container/>
        </div>
      </Router>
  );
};

export default connect(null, {fetchAllUsersConnect: fetchAllUsers,})(App);
