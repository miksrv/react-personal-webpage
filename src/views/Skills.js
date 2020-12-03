import React from 'react'
import { Grid, Progress, Label } from 'semantic-ui-react'

import Section from '../layouts/Section'

import tags from '../data/tags'
import data from '../data/skills'

const Skills = () => {
    return (
        <>
            <Section>
                <Grid>
                    <Grid.Row>
                        {data.map((item, key) => (
                            <Grid.Column computer={8} mobile={16} key={key}>
                                <label>{item.name}</label>
                                <Progress size='tiny' percent={item.level} color='green'  />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
            </Section>
            <div className='skills'>
                {tags.map((item, key) => (
                    <Label color='green' key={key}>
                        {item}
                    </Label>
                ))}
            </div>
        </>
    )
}

export default Skills