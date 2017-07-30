## Testing action creators

In Redux, action creators are functions which return plain objects. When testing action creators we want to test whether the correct action creator was called and also whether the right action was returned.

```js
it('should create an action to add a todo', () => {
  const text = 'Finish docs'
  const expectedAction = { type: ADD_TODO, text }
  expect(addTodo(text)).toEqual(expectedAction)
})
```

## Testing async actions (thunk functions)

For async action creators using Redux Thunk, it's best to completely mock the Redux store for tests. You can apply the middleware to a mock store using `redux-mock-store`. You can also use `fetch-mock` to mock the HTTP requests.

```js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([ thunk ])

it('creates SET_FOO after fetching foo', () => {
  const store = mockStore({foo: ''})
  const expectedActions = [{ type: SET_FOO, foo: 'bar' }]

  fetchMock.get('*', 'bar')

  store.dispatch(fetchTodos())
  .then(() => {
    const actions = store.getActions()
    expect(actions).toEqual(expectedActions)
  })
})
```
