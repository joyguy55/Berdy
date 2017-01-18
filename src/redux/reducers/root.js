import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import Reviews from './review.js'
import LocationReducer from './location.js'
import Movies from './movie.js'

export default combineReducers({
  routing: routerReducer,
  LocationReducer,
  Reviews,
  Movies,
})
