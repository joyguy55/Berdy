import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/store.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Review from './components/review.js'

import store from './redux/store.js'

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Review}></Route>
          </Router>
        </Provider>
    )
  }
}

export default App;
