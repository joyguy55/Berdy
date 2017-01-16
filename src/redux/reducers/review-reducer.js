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
   ],
   movie: [{
    adult:false,
    backdrop_path:"/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
    genre_ids:Array[3],
    id:11,
    original_language:"en",
    original_title:"Star Wars",
    overview:"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    popularity:11.822564,
    poster_path:"/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
    release_date:"1977-03-20",
    title:"Star Wars",
    video:false,
    vote_average:7.9,
    vote_count:4511,
    }
  ]
}

function Reviews( state = initialState, action){
  const actions = {
    'RECEIVED_REVIEW': () => {
     return { ...state, 'reviews': action.payload }
    },
    'SEARCH_API': () => {
     return { ...state, 'movie': action.payload }
    },
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default Reviews
