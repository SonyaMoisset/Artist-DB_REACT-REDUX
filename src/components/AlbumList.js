import React, { Component } from 'react'
import { connect } from 'react-redux'

const showAlbumsList = ({ albumList }) => {
    if (albumList) {
        return albumList.map((album, index) => {
            console.log('album', album)
                return (
                    <img
                        key={index}
                        src={`/images/albums/${album.cover}.jpg`}
                        alt="album cover" />
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
