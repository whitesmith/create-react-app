# Epics

An Epic is the core primitive of [redux-observable](https://redux-observable.js.org/).
It is a function which takes a stream of actions and returns a stream of actions. Actions in, actions out.

```js
const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' });
```

later...

```js
dispatch({ type: 'PING' });
```

...`pingEpic` will listen for actions of type `PING` and map them to a new action `PONG`.

> Note: Epics run alongside the normal Redux dispatch channel, **after** the reducers have already received them.
