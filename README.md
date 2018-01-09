A Collection of decorators to make using `connect` easier.

## Installation
`npm install react-redux-decorate`

## Example
```js
import React from 'react'
import { mapDispatchToProps, mapStateToProps } from 'react-redux-decorate'

@mapStateToProps((state) => ({
  users: state.users
}))
@mapDispatchToProps((dispatch, ownProps) => ({
  getUser(id) {
    dispatch(ownProps.getUser(id))
  }
}))
export default class MyFancyComponent extends React.Component {
 // react things in here
}
```

## Usage
`mapStateToProps(mapStateToProps (Function), [options] (Object))`

`mapDispatchToProps(mapDispatchToProps(Function), [options] (Object))`

`fn` and `options` follow the [react-redux-api for connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#api)

react-redux's `connect` is also in case of complicated use-cases