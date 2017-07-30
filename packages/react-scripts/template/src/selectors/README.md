# Selectors

Shortly, selectors are memoized functions that help improve efficiency.

> Selectors can compute derived data, allowing Redux to store the minimal possible state.
> Selectors are efficient. A selector is not recomputed unless one of its arguments change.

You can read more about it [here](https://github.com/reactjs/reselect).

```js
const getTodos = state => state.todos
const filterTodos = todos => todos.filter(each => each.visible)

const visibleTodosSelector = createSelector(
  [ getTodos ], filterTodos
)
```
