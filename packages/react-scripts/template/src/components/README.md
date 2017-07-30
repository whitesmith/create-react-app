# Components

- Are concerned with how things look. Presentational only.
- Stateless and independent, stripped of any business logic.
- Read data / invoke callbacks from props.
- Are written as functional components.

```js
const FooComponent = (props) => (
  <div> Hello {props.name} </div>
)
```