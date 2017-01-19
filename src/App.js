import React, { Component } from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'

import MainDisplay from './components/main.js'
import ReviewForm from './components/reviewform/review-form.js'


import store from './api/store.js'

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
        <Provider store={store}>

           <Router
              location={ window.location }
              onChange={ location => this.props.setLocation(location) }
             >
             <div>
                <Match exactly pattern="/" component={MainDisplay} />
                <Match pattern="/add" component={ReviewForm} />
              </div>
           </Router>

        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
