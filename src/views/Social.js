import React, { useState, useEffect } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

import Section from '../layouts/Section'

import data from '../data/contact'

const Social = () => {
    const [count, setState] = useState(4);

    useEffect(() => {
        setState(Math.round(16 / data.length))
    }, []);

    return (
        <Section id='social' color='green' inverted={true}>
            <Grid>
                <Grid.Row className='social'>
                    {data.map((item, key) => (
                        <Grid.Column textAlign='center' width={count} key={key}>
                            <a href={item.link} title={item.label}>
                                <Icon name={item.icon} size={'big'} />
                            </a>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </Section>
    );
};

export default Social