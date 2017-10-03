import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allArtists } from '../actions/artists_actions'
import { bindActionCreators } from 'redux'

import { Banner } from '../components'
import { ArtistsList } from '../containers'

class Home extends Component {

    componentDidMount() {
        this.props.allArtists()
    }

    render() {
        return (
            <div>
                <Banner />
                <ArtistsList allArtists={this.props.artists} />
            </div>
        )   
    }        
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ allArtists }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
