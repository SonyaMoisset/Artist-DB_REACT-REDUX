import React from 'react'

const AlbumList = props => {

    const showList = ({ albumList }) => {
        if (albumList) {
            return albumList.map((album, index) => {
                return (
                    <img
                        key={index}
                        src={`/images/albums/${album.cover}.jpg`}
                        alt="album cover"/>
                )
            })
        }
    }

    return (
        <div className="albums_list">
            {showList(props)}    
        </div>
    )
}

export default AlbumList