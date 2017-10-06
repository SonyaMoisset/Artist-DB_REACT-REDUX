import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Artist, Home } from '../containers'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/artist/:id" component={Artist} artistProfile={this.props.artist} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App