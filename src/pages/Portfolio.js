import * as React from 'react'
import { Grid, Image, Button, Reveal, Container, Header, Label } from 'semantic-ui-react'
import { Animated } from 'react-animated-css' // https://digital-flowers.github.io/react-animated-css.html
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'

import works from '../data/portfolio'
import filter from '../data/filter'

const IMG_DIR = '/images/portfolio/'

class Portfolio extends React.Component {

    state = {
        filterActive: null,
        animate: true,
        photoIndex: 0,
        isOpen: false,
    }

    componentDidMount() {
        document.title = 'My some works'
    }

    cardFilterSelect = (filterActive) => {
        if (filterActive === this.state.filterActive) {
            return
        }

        this.setState({animate: ! this.state.animate})

        setTimeout(() => {
            this.setState({filterActive, animate: ! this.state.animate})
        }, 100)
    }

    clickHandler = (img, link) => {
        if (link !== '') {
            return window.open(link, "_blank");
        }

        this.setState({isOpen: true, photoIndex: img})
    }

    render() {
        const { photoIndex, isOpen, filterActive } = this.state

        const portfolio = works
            .filter(({ category }) => {
                return ! this.state.filterActive || category === this.state.filterActive
            })
            .map((item, key) => {
                return (
                    <Grid.Column key={key}>
                        <Animated animationIn='rotateIn' animationInDuration={500} animationOut='rotateOut' isVisible={this.state.animate}>
                            <Reveal animated='move down' className='container' onClick={() => this.clickHandler(item.image, item.link)} >
                                <Reveal.Content visible>
                                    <Image src={IMG_DIR + item.image} />
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <div className='info'>
                                        <h4>{item.title}</h4>
                                        {item.technology.map((tech, index) => (
                                            <Label color='teal' size='mini' key={index}>
                                                {tech}
                                            </Label>
                                        ))}
                                        <p>{item.description}</p>
                                    </div>
                                </Reveal.Content>
                            </Reveal>
                        </Animated>
                    </Grid.Column>
                )
            })

        return (
            <div id='wrapper'>
                {isOpen && (
                <Lightbox
                    mainSrc={IMG_DIR + photoIndex}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />)}
                <Container>
                    <Header className='section-header' as='h1'>
                        My some works
                    </Header>
                    <div className='filter-group'>
                        <Button
                            color={filterActive === null ? 'olive' : 'green'}
                            size='mini'
                            onClick={() => this.cardFilterSelect(null)}
                        >
                            All
                        </Button>
                        {filter.map(filterName => (
                            <Button
                                color={filterActive === filterName ? 'olive' : 'green'}
                                size='mini'
                                key={filterName}
                                onClick={() => this.cardFilterSelect(filterName)}
                            >
                                {filterName}
                            </Button>
                        ))}
                    </div>
                    <Grid doubling columns={3} className='portfolio' >
                            {portfolio}

                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Portfolio