import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Dimmer, Loader, Icon, Image, Header, Button } from 'semantic-ui-react'
import Gallery from 'react-grid-gallery'

import moment from 'moment'

import * as actions from '../store/profile/actions'

import _ from 'lodash'

const POST_ON_PAGE = 4

class Blog extends Component {

    state = {
        activePage: 1,
        postsData: [],
        postsCount: 0,
        btnLoading: false
    }

    componentDidMount() {
        const { dispatch } = this.props

        document.title = 'My personal blog'

        moment.locale('ru')

        dispatch(actions.fetchVKPostData(0, POST_ON_PAGE))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { postsData, activePage } = this.state

        if (_.isEmpty(this.state.postsData) || this.props.vk_posts.items !== prevProps.vk_posts.items) {
            this.setState({
                postsData: postsData.concat(this.props.vk_posts.items),
                postsCount: this.props.vk_posts.count,
                btnLoading: false
            })
        }
    }

    render() {
        const { activePage, postsData, postsCount, btnLoading } = this.state

        const pageCount = ! _.isEmpty(postsData) ? Math.ceil(postsCount / POST_ON_PAGE) : 0

        return (
            <div id='wrapper'>
                { ! _.isEmpty(postsData) ? (
                    <Container>
                        <Header className='section-header' as='h1'>
                            My personal blog
                        </Header>
                        {postsData.map((item, key) => (
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
                        <Button
                            fluid
                            color='green'
                            onClick={this.handlePaginationChange}
                            disabled={(activePage >= pageCount || btnLoading)}
                            loading={btnLoading}
                        >
                            Load more
                        </Button>
                    </Container>
                ) : (
                    <Dimmer active>
                        <Loader>Загрузка</Loader>
                    </Dimmer>
                )}
            </div>
        )
    }

    handlePaginationChange = () => {
        const { dispatch } = this.props
        const { activePage } = this.state
        const pageCurrent = activePage + 1

        this.setState({
            activePage: pageCurrent,
            btnLoading: true
        })

        dispatch(actions.fetchVKPostData((pageCurrent * POST_ON_PAGE) - POST_ON_PAGE, POST_ON_PAGE))
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