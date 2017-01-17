import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import './style.scss'
import * as actions from '../../redux/actions/review-action.js'

class ReviewForm extends React.Component {
 constructor(){
  super()
  this.state = {
    dataSource: [],
    movieSelection: null,
  }
 }

handleMovieClick(ind){
  const arr = []
  arr.push(this.props.Reviews.movie[ind])
  this.setState({ movieSelection: arr})
}

render() {

 const movie_arr = this.props.Reviews.movie.filter( (e,ind,arr)=>{
   if ( arr[ind].vote_average > 6 && arr[ind].poster_path !== null ){
    return arr[ind]
   } else {}
 } )
 console.log(movie_arr)
 return(
  <div className="form-wrapper">
    <TextField
       className="search"
       hintText="Find a Movie"
       fullWidth={true}
       onChange={ (e,newValue)=>{ this.props.searchApi(newValue) } }
     />
     <div className="movies">
       {
         movie_arr.map( (obj,ind)=>{
           return(
           <img className="movie"
                key={obj.id}
                alt=''
                src={`https://image.tmdb.org/t/p/w154//${obj.poster_path}`}
                onClick={ (e)=>{this.handleMovieClick(ind)} }
                />
           )
         })
        }
     </div>
     {
       this.state.movieSelection !== null ?
     <Link to="/add2"> <RaisedButton className="next" fullWidth={true} label="Next" /> </Link> :
      ''
     }
  </div>
 )
}

}

export default connect(
  function mapStateToProps(store){
     return store
  },
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(ReviewForm)
