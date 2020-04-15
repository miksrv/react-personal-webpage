import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Dimmer, Loader, Icon, Pagination, Image } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery'

import moment from 'moment'

import * as actions from '../store/profile/actions'

import _ from 'lodash'

const POST_ON_PAGE = 2

class Blog extends Component {

    state = {
        activePage: 1
    }

    componentDidMount() {
        const { dispatch } = this.props

        moment.locale('ru')

        dispatch(actions.fetchVKPostData(0, POST_ON_PAGE))
    }

    render() {
        const { vk_posts } = this.props
        const { activePage } = this.state

        const pageCount = ! _.isEmpty(vk_posts) ? (vk_posts.count / POST_ON_PAGE) : 0

        return (
            <div id='wrapper'>
                { ! _.isEmpty(vk_posts) ? (
                    <Container>
                        {vk_posts.items.map((item, key) => (
                            <Segment key={key}>
                                <div className='vk-profile'>
                                    <Image src='/images/avatar.jpg' avatar />
                                    <div>
                                        <div>Misha Perevalov</div>
                                        <div className='vk-info'><Icon name='like' /> {item.likes.count} &middot; {moment.unix(item.date).format("DD MMMM Y в H:mm")}</div>
                                    </div>
                                </div>
                                <p className="vk-text">{item.text}</p>
                                {this.makeImages(item.attachments)}
                                <div className="clear"></div>
                            </Segment>
                        ))}
                        <div className='pagination-container'>
                            <Pagination
                                defaultActivePage={activePage}
                                totalPages={pageCount}
                                onPageChange={this.handlePaginationChange}
                                ellipsisItem={null}
                                prevItem={null}
                                nextItem={null}
                                pointing
                                secondary
                            />
                        </div>
                    </Container>
                ) : (
                    <Dimmer active>
                        <Loader>Загрузка</Loader>
                    </Dimmer>
                )}
            </div>
        )
    }

    handlePaginationChange = (e, { activePage }) => {
        const { dispatch } = this.props

        dispatch(actions.fetchVKPostData((activePage * POST_ON_PAGE) - POST_ON_PAGE, POST_ON_PAGE))

        this.setState({ activePage })

        window.scrollTo(0, 0)
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
                src: (typeof item.photo.photo_1280 !== 'undefined' ? item.photo.photo_1280 : item.photo.photo_604),
                thumbnail: item.photo.photo_604,
                thumbnailWidth: item.photo.width,
                thumbnailHeight: item.photo.height,
                caption: item.photo.text
            })
        ))

        if ( ! _.isEmpty(result)) {
            return <Gallery
                images={result}
                enableImageSelection={false}
                showCloseButton={false}
                backdropClosesModal={true}
                showImageCount={false}
            />
        }
    }
}

function mapStateToProps(state) {
    return {
        vk_posts: state.profile.vk_posts
    }
}

export default connect(mapStateToProps)(Blog)