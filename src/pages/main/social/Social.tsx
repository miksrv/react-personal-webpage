import React from 'react'
import { Data } from './data'

import SvgIcons from 'components/svgIcon/SvgIcons'

import './index.sass'

const Social: React.FC = () => {
    return (
        <div className='social'>
            {Data.map((item) =>
                <a href={item.link} title={item.label} key={item.link}>
                    <SvgIcons name={item.icon} />
                </a>
            )}
        </div>
    )
}

export default Social
