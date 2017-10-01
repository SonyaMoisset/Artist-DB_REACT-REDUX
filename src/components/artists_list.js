import React from 'react'
import { Link } from 'react-router-dom'

const list = ({ allArtists }) => {
    if (allArtists) {
        return allArtists.map(artist => {
            const style = { background: `url('/images/covers/${artist.cover}.jpg') no-repeat` }
            
            return (
                <Link
                    key={artist.id}
                    to={`/artist/${artist.id}`}
                    className="artist_item"
                    style={style}>
                    <div>{artist.name}</div>
                </Link>
            )
        })
    }
}

const ArtistsList = props => (
    <div className="artists_list">
        <h4>Browse the artists</h4>
        {list(props)}
    </div>
)

export default ArtistsList