import React, { useState, useEffect } from 'react'

import { Grid, Divider, Image, Responsive } from 'semantic-ui-react'

import Section from '../layouts/Section'

import updated from '../data/updated'

const About = () => {
    const [age, setCurrentAge] = useState(0)
    const [width, updateWidth] = useState(0)

    const mobile = width >= Responsive.onlyComputer.minWidth ? null : 'mobile-mode'

    const handleUpdateWidth = (e, { width }) => {
        updateWidth(width)
    }

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
        const birthTime = new Date('1989-09-09T05:15:00')

        setCurrentAge(((Date.now() - birthTime) / divisor).toFixed(11))
    }

    useEffect(() => {
        const timer = setInterval(() => tick(), 25)
        return () => { clearInterval(timer) }
    }, [])

    return (
        <Section>
            <Responsive as={Grid} fireOnMount onUpdate={handleUpdateWidth} className='about'>
                <Grid.Row className={mobile}>
                    <Grid.Column computer={6} mobile={16}>
                        <Image src='/images/myphoto.jpg' fluid className='full-width' />
                    </Grid.Column>
                    <Grid.Column computer={10} mobile={16}>
                        <h1>Hi I'm - <span>Misha</span></h1>
                        <h3>Programmer, engineer and dreamer</h3>
                        <Divider section />
                        <Grid className='my-statistic'>
                            <Grid.Row>
                                <Grid.Column className='stat-key' width={6}>My age</Grid.Column>
                                <Grid.Column className='stat-val' width={10}>{age}</Grid.Column>
                                <Grid.Column className='stat-key' width={6}>Location</Grid.Column>
                                <Grid.Column className='stat-val' width={10}>Russia, Orenburg</Grid.Column>
                                <Grid.Column className='stat-key' width={6}>Last updated</Grid.Column>
                                <Grid.Column className='stat-val' width={10}>{updated}</Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <p>I develop websites, I write programs, I like to do something myself. I am fond of astronomy, photography, tourism, travel and radio electronics. There are several own micro-projects on which I can talk with pleasure.</p>
                        <p>Always open to communication with interesting people :)</p>
                    </Grid.Column>
                </Grid.Row>
            </Responsive>
        </Section>
    )
}

export default About