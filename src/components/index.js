import React from 'react'
import './style.scss'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import Review from './reviewlist/review.js'
import ReviewForm from './reviewform/review-form.js'
import ReviewFormSub from './reviewform/review-form-sub.js'
import SideBar from './navigation.js'

import store from '../redux/store.js'

const history = syncHistoryWithStore(browserHistory, store)

const Index = (props) => {
 return(
   <div className="index">
      <SideBar />
      <Router history={history}>
        <Route path="/" component={Review}></Route>
        <Route path="/add" component={ReviewForm}></Route>
        <Route path="/add2" component={ReviewFormSub}></Route>
      </Router>
   </div>
 )
}

export default Index
