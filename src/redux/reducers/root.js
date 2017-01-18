import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import Reviews from './review-reducer.js'
import locationReducer from './location-reducer.js'

export default combineReducers({
  routing: routerReducer,
  Reviews,
  locationReducer,
})
