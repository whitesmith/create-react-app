# Containers

- Are concerned with how things work.
- Are redux/state and business logic aware
- Subscribe to Redux state
- Dispatch Redux actions

In a nutshell, containers does data fetching and then renders its corresponding presentational component, providing data and actions as props. `react-redux` provides the ideal way to do so

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  foo: state.foo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getFoo: () => dispatch(fetchFoo())
})

connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```
