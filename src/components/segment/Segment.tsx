import React from 'react'

import './index.sass'

interface ISegment {
    children: React.ReactChild
}

const Segment: React.FC<ISegment> = ({ children }) => {
    return (
        <div className='segment'>
            {children}
        </div>
    )
}

export default Segment
