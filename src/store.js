import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import mainReducer from './reducers/mainReducer'

const middleware = [promiseMiddleware]

export default createStore( mainReducer, applyMiddleware(...middleware))