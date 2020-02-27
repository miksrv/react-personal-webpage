import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from 'semantic-ui-react'
import { configureAnchors } from 'react-scrollable-anchor'

import Header from '../components/Template/Header'

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
                <Header />
                <About />
                <Social />
                <Skills />
            </Container>
        </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;