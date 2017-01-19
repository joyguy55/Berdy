const initialLocation = { pathname: '/', search: '', hash: '' }
const LocationReducer = (state = initialLocation, action) => {
  return action.type === 'LOCATION_CHANGE' ?
    action.location : state
}

export default LocationReducer
