import React from 'react'
import { Data } from './data'

import Icon from '../../layouts/svgIcon'

import './index.sass'

const Social: React.FC = () => {
    return (
        <div className='social'>
            {Data.map((item) =>
                <a href={item.link} title={item.label} key={item.link}>
                    <Icon name={item.icon} />
                </a>
            )}
        </div>
    )
}

export default Social
