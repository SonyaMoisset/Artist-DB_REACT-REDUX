import React, { Component } from 'react'
import { connect } from 'react-redux'
import { artistProfile } from '../actions/artist_actions'
import { bindActionCreators } from 'redux'

import { AlbumList, Header } from '../components'

class Artist extends Component {
    
    componentDidMount() {
        this.props.artistProfile(this.props.match.params.id)
    }

    showArtist = ({ artist }) => {
        if (artist) {
            return artist.map(profile => {
                console.log('profile', profile.albums)
                return (
                    <div key={profile.id}>
                        <Header />
                        <div className="artist_bio">
                            <div className="avatar">
                                <span style={{ background: `url('/images/covers/${profile.cover}.jpg') no-repeat` }}></span>
                            </div>
                            <div className="bio">
                                <h3>{profile.name}</h3>
                                <div className="bio_text">
                                    {profile.bio}
                                </div>
                            </div>
                            <AlbumList albumList={profile.albums} />
                        </div>
                    </div>
                )
            }) 
        }
    }

    render() {
        return (
            <div>
                {this.showArtist(this.props.artist)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        artist: state.artist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ artistProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
