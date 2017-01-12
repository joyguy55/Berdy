import React from 'react'
import style from './style.scss'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'
import ReviewText from './reviewtext.js'
// import $ from 'jquery'

class Review extends React.Component{
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
   this.setState({
     review_text : dummie[index].review_text,
     index: index,
   })
}

 render(){
    const dummie = this.props.Reviews.reviews
    return(
      <div className="review-box" >
         {
            dummie.map((obj, index) => {
               return(
                  <div key={ index } className="review">
                      <div className="col-div">
                        <div className="col">
                           <div className="movie-container">
                              <img className="movie-img" alt="" src={ obj.movie_img }/>
                           </div>
                        </div>
                        <div className="col two">
                           <h5 className="movie-name" >{ obj.movie_name }</h5>
                           <div className="bottom">
                              <img className="friend-circle" alt="" src={ obj.friend_img }/>
                              <p className="friend-name" >{ obj.friend_name }</p>
                           </div>
                        </div>
                        <div className="col three">
                           <p>
                              {
                                 obj.recommended === true ?
                                 <i className="material-icons add-circle">add_circle_outline</i> :
                                 <i className="material-icons add-circle">remove_circle_outline</i>
                              }
                           </p>
                        </div>
                     </div>
                     <div className={`star-container ${index}`} >
                        { this.handleStars(obj.stars) }
                       <i className="material-icons toggler" onClick={ () => { this.handleToggle(index) } }>arrow_drop_up</i>
                     </div>
                        { index === this.state.index ? <ReviewText text={obj.review_text} toggleclass={this.state.toggleclass}/> : null}
                  </div>
               )
            })
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
)(Review)
