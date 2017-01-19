import React from 'react'
import './style.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../api/actions/actions.js'
//import RaisedButton from 'material-ui/RaisedButton'
import * as icons from '../resources/svg.js'

class ReviewList extends React.Component{
 constructor() {
   super()
   this.state = {
     review_text: '',
     toggleclass: 'review-text-hidden',
     index: null,
   }
 }

 handleStars(length) {
    const stars = []
    for (let i=0; i<length; i++) {
        stars.push( <i className='material-icons stars'>star_rate</i> )
    }
    const mapped = stars.map( (ele, index) => {
       return (
          <div key={index} >{ele}</div>
          )
       }
    )
    return mapped
 }

handleToggle(index){
   const dummie = this.props.Reviews.reviews
   if (index !== this.state.index){
     this.setState({
       review_text : dummie[index].review_text,
       index: index,
     })
   } else {
     this.setState({
       review_text : dummie[index].review_text,
       index: '',
     })
   }
}

handleTrim(string){
  const newstring = string.substring(0, 65)
  return newstring
}

handleDisplay(obj){
  this.props.setMovie(obj.movie_name)
}

 render(){
  const dummie = this.props.Reviews.reviews
  console.log(dummie, this.props)
  return(
    <div className="review-box" >
      {
        dummie.map((obj, index) => {
           return(
            <div key={ index } className="review">
               <div className="col-container">

                  <div className="col one">
                     <div className="movie-container">
                        <img className="movie-img"
                             alt=""
                             onClick={ () => { this.handleDisplay(obj) } }
                             src={ obj.movie_img }/>
                     </div>
                  </div>

                  <div className="col two">
                     <div className="head">
                        <h5 className="movie-name" >{ obj.movie_name }</h5>
                     </div>
                     <div className="rank-cont">
                     <p>{ obj.vote_average }</p> { icons.star() }
                     </div>
                  </div>

                </div>
                <div className="recommendation-cont">
                {
                  obj.recommendedBy.map( (obj, index)=>{
                    return(
                       <img key={index} alt="" src={obj.friend_img}/>
                    )
                  })
                }
                </div>
              </div>
            )
        })
      }
    </div>
  )}

}

// {
//   dummie.map((obj, index) => {
//     return(
//         <div>
//            <div className={`star-container ${index}`} >
//               { this.handleStars(obj.stars) }
//               {
//                 index === this.state.index ?
//                 <i className="material-icons toggler" onClick={ () => { this.handleToggle(index) } }>arrow_drop_up</i> :
//                 <i className="material-icons toggler" onClick={ () => { this.handleToggle(index) } }>arrow_drop_down</i>
//               }
//            </div>
//            { index === this.state.index ? <ReviewText text={obj.review_text} toggleclass={this.state.toggleclass}/> : null }
//         </div>
//      )
//   })
// }

// <p className="overview" >{ this.handleTrim(obj.overview) }...</p>

export default connect(
  function mapStateToProps(store){
     return store
  },
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(ReviewList)
