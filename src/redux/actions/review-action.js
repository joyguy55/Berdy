import axios from 'axios'

export function ReceivedReview(reviewObj){
  return {
    type: 'RECEIVED_REVIEW',
    reviewObj
  }
}

export const searchApi = (searchParam) => {
   return (dispatch) => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${searchParam}&page=1&include_adult=false`)
      .then((res)=>{
        dispatch({type:'SEARCH_API', payload: [...res.data.results]})
      })
   }
}
