import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery'

import moment from 'moment'

import * as actions from '../store/profile/actions'

import _ from 'lodash'

class Blog extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        moment.locale('ru')

        dispatch(actions.fetchVKPostData())
    }

    render() {
        const { vk_posts } = this.props

        console.log('vk_posts', vk_posts);

        return (
            <div id='wrapper'>
                { ! _.isEmpty(vk_posts) ? (
                    <Container>
                        {vk_posts.items.map((item, key) => (
                            <Segment className="animate-up">
                                {item.text} {moment.unix(item.date).format("DD.MM.Y, H:mm:ss")}
                                {this.makeImages(item.attachments)}
                            </Segment>
                        ))}
                    </Container>
                ) : (
                    <Dimmer active>
                        <Loader>Загрузка</Loader>
                    </Dimmer>
                )}
            </div>
        )
    }

    makeImages = data => {
        const result = []
        const sources = data.filter(function(item) {
            if (item.type !== "photo") {
                return false
            }
            return true

        }).map(function(item) { return item })

        sources.map((item, key) => (
            result.push({
                src: item.photo.photo_1280,
                thumbnail: item.photo.photo_130,
                //     thumbnailWidth: 320,
                //     thumbnailHeight: 174,
                caption: item.photo.text
            })
        ))

        if ( ! _.isEmpty(result)) {
            return <Gallery images={result} />
        }
    }
}

function mapStateToProps(state) {
    return {
        vk_posts: state.profile.vk_posts
    }
}

export default connect(mapStateToProps)(Blog)