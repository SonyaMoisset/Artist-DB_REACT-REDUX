import React, { Component } from 'react'

import Header from './header'
import AlbumList from './album_list'

const REQ_URL = `http://localhost:3004/artists`

class Artist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: ''
        }
    }

    componentDidMount = () => {
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`, { method: 'GET' })
        .then(artist => artist.json())
        .then(artist => { this.setState({ artist }) })
    }

    render = () =>  {
        const style = { background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat` }

        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={style}></span>    
                    </div>    
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>  
                        <div className="bio_text">
                            {this.state.artist.bio}    
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }

}

export default Artist
