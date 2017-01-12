import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import Reviews from './review-reducer.js'

export default combineReducers({
  routing: routerReducer,
  Reviews,
})
