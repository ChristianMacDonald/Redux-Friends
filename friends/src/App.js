import React from 'react';
import { Route } from 'react-router-dom';
import { LoginFormView, PrivateRoute } from './views';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginFormView} />
      <Route path='/friends' component={PrivateRoute} />
    </div>
  );
}

export default App;
