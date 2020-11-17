import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Icon, Image} from 'semantic-ui-react'

import Section from '../layouts/Section'

const Projects = () => {
    return (
        <div id='projects'>
            <Grid columns={3}>
                <Grid.Row >
                    <Grid.Column textAlign='center'>
                        <Section>
                            <a href={item.link} title={item.label}>
                                <Image src='/images/project-observatory.jpg' fluid className='full-width' />
                            </a>
                        </Section>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Section>
                            <Image src='/images/project-orion.jpg' fluid className='full-width' />
                        </Section>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Section>
                            <Image src='/images/project-greenexp.jpg' fluid className='full-width' />
                        </Section>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Projects