# Middlwares

Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

```js
const logging = store => next => action => {
  const previousState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  console.log(action.type)

  return result
}
```
