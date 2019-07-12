import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Container from './containers/Container'

const App = () => {
  return (
      <Router>
        <div className="container">
          <Container/>
        </div>
      </Router>
  );
};

export default App;
