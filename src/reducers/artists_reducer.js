import {
    GET_ALL_ARTISTS
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.payload
            }
        default:
            return state
    }
}
