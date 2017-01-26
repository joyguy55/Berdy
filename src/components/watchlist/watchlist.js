import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import List from './list.js'
import * as actions from '../../api/actions/actions.js'
// import * as icons from '../resources/svg.js'
import Selection from '../selection/selection.js'

class WatchList extends React.Component {
  constructor() {
    super()
     this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    }
  }

  hasWatchList() {
    if (Array.from(this.props.Movies.watchlist)[0] === undefined) {
      return <NoList/>
    } else {
      return <List movies={Array.from(this.props.Movies.watchlist)}/>
    }
  }

  render() {
    return (
      <div className="watchlist-cont">
      <Selection/>
        {this.hasWatchList()}
      </div>
    )
  }

}

const NoList = () => {
  return (
    <div className="container">
      <p className="no-disp">
        You have not added any movies to your watchlist start searching for movies and create a watchlist. Help us keep track of what you want to watch.</p>
    </div>
  )
}

export default connect(function mapStateToProps(store) {
  return store
}, dispatch => ({
  ...bindActionCreators(actions, dispatch)
}))(WatchList)

// {this.state.movieSelection
//   ? <CreateReview open={this.state.openReview}/>
//   : null
// }
