import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment } from 'semantic-ui-react'

import * as actions from '../store/personal/actions'

class Blog extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        dispatch(actions.fetchVKPostData())
    }

    render() {
        return (
            <div id='wrapper'>
                <Container>
                    <Segment className="animate-up">
                        test
                    </Segment>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);

    return {

    }
}

export default connect(mapStateToProps)(Blog)