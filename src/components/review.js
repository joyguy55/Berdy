import React from 'react'
import style from './style.scss'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'
// import $ from 'jquery'

class Review extends React.Component{
 constructor() {
   super()
   this.state = {
      dummie: [
         {
            friend_name: 'Senor Juan',
            friend_img: 'https://randomuser.me/api/portraits/men/77.jpg',
            recommended: true,
            movie_name: 'Arrival',
            movie_img: 'http://cdn3-www.comingsoon.net/assets/uploads/gallery/arrival/arrivalposter.jpg',
            review_text: 'I likey dis movie sooo goooooood! Mind blowing ending',
            spoiler: false,
            stars: 5,
            toggleReview: false,
         },
         {
            friend_name: 'Marty Mcfly',
            friend_img: 'https://randomuser.me/api/portraits/men/68.jpg',
            recommended: true,
            movie_name: 'Hell or High Water',
            movie_img: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRYPGO1eXsOXccVk-YmuR5XBUsr9Cjf7PrrAdc-KngRAptlynNl',
            review_text: 'Da bomb.com oh Yeah watchy watchy!',
            spoiler: false,
            stars: 4,
            toggleReview: false,
         },
         {
            friend_name: 'Carla',
            friend_img: 'https://randomuser.me/api/portraits/women/68.jpg',
            recommended: true,
            movie_name: 'LA LA LAND',
            movie_img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRhFtgdSYQ89vUMjMJal2D8H39qBCkh9ptCEoZEsafOzkeQPTu2',
            review_text: 'Loved this movie great new take on Musicals!',
            spoiler: true,
            stars: 5,
            toggleReview: false,
         },
      ] ,
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

// handleToggle(e){
//    console.log(e.target.attributes.value)
//    const targ = e.target.attributes.value
//    this.state.dummie[targ].toggleReview = !this.state.dummie[targ].toggleReview // this is why your state should never be very big and you should always use
//    // () => { this.setState({ toggleReview: false }) }
// }

 render(){
    const dummie = this.state.dummie
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
                        {
                           this.handleStars(obj.stars)
                        }
                        {
                           this.state.toggleReview ?
                           <i className="material-icons toggler" value={index} onClick={ this.handleToggle }>arrow_drop_up</i> :
                           <i className="material-icons toggler" value={index} onClick={ this.handleToggle }>arrow_drop_down</i>
                        }
                     </div>
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
