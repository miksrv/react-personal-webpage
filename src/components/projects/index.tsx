import React from 'react';
import { Data } from './data'

import './index.sass'

const Projects: React.FC = () => {
    return (
        <div className='projects'>
            {Data.map((item) =>
                <div className='segment item' key={item.link}>
                    <a href={item.link} title={item.label}>
                        <img src={item.image} alt={item.label} />
                    </a>
                </div>
            )}
        </div>
    )
}

export default Projects