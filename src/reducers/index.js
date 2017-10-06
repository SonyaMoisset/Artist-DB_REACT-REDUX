import { combineReducers } from 'redux'
import artists from './artists_reducer'
import artist from './artist_reducer'

const rootReducer = combineReducers({
    artists,
    artist
})

export default rootReducer