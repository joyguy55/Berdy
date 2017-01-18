import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions.js'

import ReviewList from '../reviewlist/review-list.js'

class MainDisplay extends React.Component {
 constructor(){
  super()
  this.state = {
    dataSource: [],
    movieSelection: null,
  }
 }

 render(){
  console.log(this.props.Movies)
  const movie = this.props.Movies.movie[0]
  return(
    <div className="component-cont">

       <div className="main-cont">

         <div><img alt="" src={ movie.poster_path }/></div>

        <div className="description">

          <div className="head-cont">
            <h1>{ movie.title }</h1>
            <div className="year">{ movie.release_date }</div>
            <div className="rating">{ movie.vote_average }</div>
          </div>

          <div className="btn-wrapper">

          </div>

          <p>Overview</p>
          <p>{ movie.overview }</p>
        </div>

       </div>

     <ReviewList/>

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