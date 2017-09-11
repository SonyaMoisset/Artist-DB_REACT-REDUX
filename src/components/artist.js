import React, { Component } from 'react'

import Header from './header'

const REQ_URL = `http://localhost:3004/artists`

class Artist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: ''
        }
    }

    componentDidMount() {
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                artist: json
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }

}

export default Artist
