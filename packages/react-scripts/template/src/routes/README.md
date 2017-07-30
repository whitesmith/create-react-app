# Routes

Redux will be the source of truth for your data.
React Router will be the source of truth for your URL.

## Custom Route

```jsx
import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequiresAuth = (Component) => (props) => {
  if (isAuthenticated) {
    return <Component {...props}/>
  }
  return <Redirect push to='/sign_in' />
}

export const PrivateRoute = ({component, ...props}) => (
  <Route {...props} component={RequiresAuth(component)}/>
)
```