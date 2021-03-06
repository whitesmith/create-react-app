import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import store from '../store';
import history from '../history';
// My components
import App from '../containers/App';

export const ROOT_PATH = '/';

const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path={ROOT_PATH} component={props => <div>Hello</div>}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
)

export default routes;
