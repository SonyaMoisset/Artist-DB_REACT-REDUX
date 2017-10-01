import {
    GET_ALL_ARTISTS
} from './types'

export const allArtists = () => {
    const request = fetch(`http://localhost:3004/artists`, { method: 'GET' })
                    .then(response => response.json())
    
    return {
        type: GET_ALL_ARTISTS,
        payload: request
    }
}
