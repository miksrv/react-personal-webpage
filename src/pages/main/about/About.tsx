import React from 'react'

import Segment from 'components/segment/Segment'
import Avatar from './avatar.jpg';

import './index.sass'

const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
const birthTime = new Date('1989-09-09T05:15:00').getTime()
const expTime = new Date('2007-10-15T10:00:00').getTime()

const About: React.FC = () => {
    const [myAge, setMyAge] = React.useState<string>('');
    const [myExp, setMyExp] = React.useState<string>('');

    const tick = () => {
        const ageCalc = ((Date.now() - birthTime) / divisor).toFixed(9);
        const expCalc = ((Date.now() - expTime) / divisor).toFixed(9);

        setMyAge(ageCalc)
        setMyExp(expCalc)
    }

    React.useEffect(() => {
        const timer = setInterval(() => tick(), 50)

        return () => clearInterval(timer)
    })

    return (
        <Segment>
            <div className='about'>
                <div className='grid'>
                    <img
                        src={Avatar}
                        alt='It is me'
                        className='avatar'
                    />
                    <div className='describe'>
                        <h1>Hi I'm - <span>Misha</span></h1>
                        <h3>Programmer, engineer and dreamer</h3>
                        <div className='divider' />
                        <div className='grid grid-keys'>
                            <div className='key'>My age</div>
                            <div className='value'>{myAge}</div>
                        </div>
                        <div className='grid grid-keys'>
                            <div className='key'>Experience</div>
                            <div className='value'>{myExp}</div>
                        </div>
                        <div className='grid grid-keys'>
                            <div className='key'>Updated</div>
                            <div className='value'>25.04.2022</div>
                        </div>
                        <p>I am a developer, create interactive information systems and complex web projects from scratch,
                            doing technical support. I am fond of programming, tourism, photography, astronomy,
                            radio electronics and some other.
                        </p>
                        <p>
                            I run my own projects and am always ready to communicate with interesting people. You can Contact me in any convenient way.
                        </p>
                    </div>
                </div>
            </div>
        </Segment>
    )
}

export default About
