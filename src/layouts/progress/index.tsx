import React from 'react'

import './index.sass'

interface IProgress {
    value: number
}

const Progress: React.FC<IProgress> = ({ value }) => {
    return (
        <div className='progress'>
            <div
                className='bar'
                style={{width: `${value}%`}}
            />
        </div>
    )
}

export default Progress

