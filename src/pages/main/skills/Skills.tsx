import React from 'react'

import { Data, Tags } from './data'

import Segment from 'components/segment/Segment'
import Progress from 'components/progress/Progress'
import Label from 'components/label/Label'

import './index.sass'

const Skills: React.FC = () => {
    return (
        <>
            <Segment>
                <div className='skills'>
                    {Data.map((item) =>
                        <div className='item' key={item.name}>
                            <label>{item.name}</label>
                            <Progress value={item.level} />
                        </div>
                    )}
                </div>
            </Segment>
            <div className='tags-cloud'>
                {Tags.map((item) =>
                    <Label name={item} />
                )}
            </div>
        </>
    )
}

export default Skills
