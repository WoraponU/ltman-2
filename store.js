import getConfig from 'next/config'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './ducks'

const bindMiddleware = middleware => {
  const {
    publicRuntimeConfig: { NODE_ENV }
  } = getConfig()
  if (NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default (initialState = {}) => {
  const middlewares = []
  const store = createStore(rootReducer, initialState, bindMiddleware(middlewares))

  return store
}
