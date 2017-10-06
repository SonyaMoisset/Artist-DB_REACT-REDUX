import React from 'react'

const showAlbumsList = ({ albumList }) => {
    if (albumList) {
        return albumList.map(album => {
                return (
                    <img
                        key={album.albumId}
                        src={`/images/albums/${album.cover}.jpg`}
                        alt={`${album.cover}`} />
                )
            })
        }
}

const AlbumList = props => (
    <div className="albums_list" >
        {showAlbumsList(props)}
    </div>
)

export default AlbumList
