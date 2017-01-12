const initialState = {
 reviews:[
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
   ]
}

function Reviews( state = initialState, action){
  const actions = {
    'RECEIVED_REVIEW': () => {
     return { ...state, 'reviews': action.payload }
    },
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default Reviews
