# Actions

Actions are payloads of information that send data from your application to your store.
They are the only source of information for the store.

```js
{ type: 'SET_FOO', foo: 'bar' }
```

## Action creators

Action creators are exactly that — functions that return actions.

```js
const setFoo = (foo) => ({
  { type: 'SET_FOO', foo }
})
```

## Thunks (async actions)

Thunks are action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

```js
const trySetFoo = foo => (dispatch, getState) => {
  const state = getState()
  if (state.canSetFoo) {
    dispatch(setFoo(foo))
  }
}
```
