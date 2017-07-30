## Testing reducers

A reducer should return the new state after applying the action to the previous state, and that's the behavior we want to test.

```js
it('should handle SET_FOO', () => {
  const action = { type: SET_FOO, foo: 'Use Redux' }
  const newState = addTodo([], action)
  const expectedState = { foo: action.foo }
  expect(newState).toEqual(expectedState)
})
```
