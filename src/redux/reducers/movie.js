const initialState = {
   movie: [{
    adult:false,
    backdrop_path:"/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg",
    genre_ids:Array[3],
    id:11,
    original_language:"en",
    original_title:"Star Wars",
    overview:"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    popularity:11.822564,
    poster_path:"https://image.tmdb.org/t/p/w300///tvSlBzAdRE29bZe5yYWrJ2ds137.jpg",
    release_date:"1977-03-20",
    title:"Star Wars",
    video:false,
    vote_average:7.9,
    vote_count:4511,
    }
  ]
}

function Movies( state = initialState, action){
  const actions = {
    'SEARCH_API': () => {
     return { ...state, 'movie': action.payload }
    },
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default Movies
