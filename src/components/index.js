import React from 'react'
import './style.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'

import ReviewList from './reviewlist/review-list.js'
import ReviewForm from './reviewform/review-form.js'

import * as actions from '../redux/actions/location-reducer.js'
import * as icons from './resources/svg.js'

const AppIndex = (props) => {
 return(
   <Router
    location={ window.location }
    onChange={ location => props.setLocation(location) }
   >
   <div>
       <div className="sidebar-container">
         <ul>
            <li><Link to="/">{ icons.menu() }</Link></li>
         </ul>
       </div>

      <Match exactly pattern="/" component={ReviewList} />
      <Match pattern="/add" component={ReviewForm} />
    </div>
   </Router>
 )
}

export default connect(
   function mapStateToProps(store){
      return store
   },
   dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(AppIndex)
