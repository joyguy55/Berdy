import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../api/actions/actions.js'

import TopBar from './topbar.js'
import SideBar from './sidebar.js'
import ReviewList from './reviewlist/review-list.js'
import Selection from './selection/selection.js'

class MainDisplay extends React.Component {

 render(){
  return(
    <div>
      <TopBar/>
      <div className="component-cont">
        <SideBar/>
        <Selection/>
        <ReviewList/>
      </div>
    </div>
  )
 }

}

export default connect(
  function mapStateToProps(store){
     return store
  },
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(MainDisplay)
