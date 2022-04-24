import React from 'react'

import { Data, Tags } from './data'

import Segment from '../../layouts/segment'
import Progress from '../../layouts/progress'
import Label from '../../layouts/label'

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
