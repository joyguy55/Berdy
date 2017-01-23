import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/root'

const store = createStore(reducer, applyMiddleware(thunk))

// console.log(store.getState())

store.subscribe( ()=> {
 console.log("store changed", store.getState())
})

export default store
