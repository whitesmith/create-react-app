import ReactDOM from 'react-dom';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';

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
