import React, { Component } from 'react'
import { connect } from 'react-redux'

class AlbumList extends Component {

    albumsList = ({ albums }) => {
        if (albums) {
            return albums.map((album, index) => {
                    return (
                        <img
                            key={index}
                            src={`/images/albums/${album.cover}.jpg`}
                            alt="album cover" />
                    )
                })
            }
    }

    render = () => (
        <div className="albums_list" >
            {this.albumsList(this.props.artists)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, null)(AlbumList)
