import React from 'react';
import logo from './media/logo.svg';
import './styleguides/App.scss';

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      { props.children }
    </p>
  </div>
)

export default App;
