import {
    GET_ARTIST_PROFILE
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ARTIST_PROFILE:
            return {
                ...state,
                artist: action.payload
            }
        default:
            return state
    }
}
