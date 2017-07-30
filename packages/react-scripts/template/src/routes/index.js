import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import store from '../store';
// My components
import App from '../containers/App';

export const ROOT_PATH = '/';

const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path={ROOT_PATH} component={props => 'Hello'}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
)

export default routes;
