import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/store.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Review from './components/reviewlist/review.js'
import ReviewForm from './components/reviewform/review-form.js'
import ReviewFormSub from './components/reviewform/review-form-sub.js'

import store from './redux/store.js'

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Review}></Route>
            <Route path="/add" component={ReviewForm}></Route>
            <Route path="/add2" component={ReviewFormSub}></Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
