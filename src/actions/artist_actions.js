import {
    GET_ARTIST_PROFILE
} from './types'

export const artistProfile = id => {
    const request = fetch(`http://localhost:3004/artists?id=${id}`, { method: 'GET' })
                    .then(response => response.json())

    return {
        type: GET_ARTIST_PROFILE,
        payload: request
    }
}
