import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import './styleguides/index.scss';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default
    ReactDOM.render(
      NextRoutes,
      document.getElementById('root')
    )
  })
}
