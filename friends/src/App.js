import React from 'react';
import { Route } from 'react-router-dom';
import { LoginFormView } from './views';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginFormView} />
    </div>
  );
}

export default App;
