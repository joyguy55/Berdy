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
    nada: '',
    dataSource: []
  }
 }

render() {
 const movie_arr = this.props.Reviews.movie.filter( (e,ind,arr)=>{
   if ( arr[ind].vote_average > 6.8 && arr[ind].poster_path !== null ){
    return arr[ind]
   } else {}
 } )
 console.log(movie_arr)
 return(
  <div className="form-wrapper">
    <TextField
       className="search"
       hintText="Find a Movie"
       dataSource={this.state.dataSource}
       onUpdateInput={this.handleUpdateInput}
       fullWidth={true}
       onChange={ (e,newValue)=>{ this.props.searchApi(newValue,console.log(this.props))} }
     />
     <div className="movies">
       {
         movie_arr.map( (obj)=>{
           return(
           <img className="movie"
                key={obj.id}
                alt=''
                src={`https://image.tmdb.org/t/p/w154//${obj.poster_path}`}/>
           )
         })
        }
     </div>
     <Link to="/add2"><RaisedButton className="next" fullWidth={true} label="Next" /></Link>
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

// && arr[ind].poster_path !== undefined

// recommended: true,
// movie_name: 'LA LA LAND',
// movie_img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRhFtgdSYQ89vUMjMJal2D8H39qBCkh9ptCEoZEsafOzkeQPTu2',
// review_text: 'Loved this movie great new take on Musicals!',
// spoiler: true,
// stars: 5,
