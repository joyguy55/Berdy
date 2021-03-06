import axios from 'axios'

export function ReceivedReview(reviewObj) {
  return {type: 'RECEIVED_REVIEW', reviewObj}
}

export function searchApi(searchParam) {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${searchParam}&page=1&include_adult=false`).then((res) => {
      dispatch({
        type: 'SEARCH_API',
        payload: [...res.data.results]
      })
    })
  }
}

export function setLocation(location) {
  return {type: 'SET_LOCATION', location}
}

export function setMovie(movie) {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${movie}&page=1&include_adult=false`).then((res) => {
      dispatch({
        type: 'SET_MOVIE',
        movie: [...res.data.results]
      })
    })
  }
}

export function addToWatchList(movie) {
  console.log(movie)
  return {type: 'ADD_TO_WATCH_LIST', movie: movie}
}
