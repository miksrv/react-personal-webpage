import React from 'react';
import { Grid, Progress } from 'semantic-ui-react';

import Section from '../layouts/Section';

import data from '../data/skills';

const Skills = () => {
    return (
        <Section id='skills'>
            <Grid>
                <Grid.Row>
                    {data.map((item, key) => (
                        <Grid.Column width={8} key={key}>
                            <label>{item.name}</label>
                            <Progress size='tiny' percent={item.level} color='green'  />
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </Section>
    );
}

export default Skills;