import React from 'react';
import logo from '../media/logo.svg';
import '../stylesheets/App.css';

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    { props.children }
  </div>
)

export default App;
