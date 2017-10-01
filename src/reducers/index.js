import { combineReducers } from 'redux'
import artists from './artists_reducer'

const rootReducer = combineReducers({
    artists
})

export default rootReducer