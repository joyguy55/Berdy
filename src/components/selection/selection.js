import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../api/actions/actions.js'
import * as icons from '../resources/svg.js'

import CreateReview from './create-review.js'

class Selection extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      movieSelection: null,
      openReview: false
    }
  }

  handleOpen() {
    this.setState({openReview: true})
  }

  handleClose() {
    this.setState({openReview: false})
  }

  handleAdd() {
    this.props.addToWatchList(this.props.Movies.movie[0])
  }

  render() {
    const movie = this.props.Movies.movie[0]
    return (
      <div className="selection-cont">

        <div><img alt="" src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`}/></div>

        <div className="description">

          <div className="head-cont">
            <h1>{movie.title}</h1>
            <div className="year">{movie.release_date}</div>
            <div className="rating">{movie.vote_average}</div>
          </div>

          <p>Overview</p>
          <p>{movie.overview}</p>

          <div className="options-btn-cont">
            <div className="opt-btn" onClick={(e) => {
              this.handleAdd()
            }}>{icons.watchlist()}</div>
            <div className="opt-btn">{icons.classic()}</div>
            <div className="opt-btn" onClick={() => {
              this.handleOpen()
            }}>{icons.rate()}</div>
          </div>

        </div>

        <CreateReview open={this.state.openReview} close={this.handleClose.bind(this)}/>

      </div>
    )
  }

}

//{ this.state.movieSelection ? <CreateReview open={ this.state.openReview }/> : null }

export default connect(function mapStateToProps(store) {
  return store
}, dispatch => ({
  ...bindActionCreators(actions, dispatch)
}))(Selection)
