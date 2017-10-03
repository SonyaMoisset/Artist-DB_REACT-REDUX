import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ArtistsList extends Component {
    showList = ({ artists }) => {
        console.log('artists', artists)
        if (artists) {
            return artists.map(artist => {
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

    render() {
        return (
            <div className="artists_list">
                <h4>Browse the artists</h4>
                {this.showList(this.props.artists)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, null)(ArtistsList)