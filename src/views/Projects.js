import React from 'react'
import { Grid, Image, Popup } from 'semantic-ui-react'

import Section from '../layouts/Section'

import data from '../data/projects'

const Projects = () => {
    return (
        <div id='projects'>
            <Grid columns={(window.screen.width > 600 ? data.length : 1)}>
                <Grid.Row>
                    {data.map((item, key) => (
                        <Grid.Column textAlign='center' key={key}>
                            <Section className='project-item'>
                                <a href={item.link} title={item.label}>
                                    <Popup
                                        content={item.label}
                                        trigger={<Image src={item.image} fluid className='full-width' />}
                                    />
                                </a>
                            </Section>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Projects