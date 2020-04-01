import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'
import { configureAnchors } from 'react-scrollable-anchor'

import About from '../views/About'
import Social from '../views/Social'
import Skills from '../views/Skills'

configureAnchors({
    offset: -60
})

class Main extends Component {
    render() {
        return (
            <div id='wrapper'>
                <Container>
                    <About />
                    <Social />
                    <Skills />
                </Container>
            </div>
        )
    }
}

export default Main