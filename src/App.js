import React, { Component } from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppIndex from './components/index.js'

import store from './redux/store.js'

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
        <Provider store={store}>
          <AppIndex/>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
