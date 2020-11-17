import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import data from '../data/projects'
import Section from "../layouts/Section";

const Projects = () => {
    console.log('window.screen.width', window.screen.width);

    return (
        <div id='projects'>
            <Grid columns={(window.screen.width > 600 ? 3 : 1)}>
                <Grid.Row>
                    {data.map((item, key) => (
                        <Grid.Column textAlign='center' key={key}>
                            <Section className='project-item'>
                                <a href={item.link} title={item.label}>
                                    <Image src={item.image} fluid className='full-width' />
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