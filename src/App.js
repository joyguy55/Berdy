import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Index from './components/index.js'

import store from './redux/store.js'

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
        <Provider store={store}>
          <Index/>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
