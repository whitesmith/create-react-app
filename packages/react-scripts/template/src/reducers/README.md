# Reducers

Actions describe the fact that something happened, but don't specify how the application's state changes in response.

This is the job of reducers.

```js
const foo = (state='foo', action) => {
  if (action.type === SET_FOO) {
    return action.foo // set new state
  }
  return state // leave previous state
}
```
