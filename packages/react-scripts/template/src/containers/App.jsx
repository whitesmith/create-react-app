import React, { Component } from 'react';
import App from '../components/App';

// Class Based Component
// use this kind of components when you need to manipulate the component lifecycle
// https://facebook.github.io/react/docs/react-component.html

class AppContainer extends Component {
  componentDidMount() {
    console.log('Component did mount!')
  }
  render() {
    return <App {...this.props} />
  }
}

export default AppContainer;
