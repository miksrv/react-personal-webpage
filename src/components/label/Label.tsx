import React from 'react'

import './index.sass'

interface ILabel {
    name: string
}

const Label: React.FC<ILabel> = ({ name }) => {
    return (
        <div className='label'>{name}</div>
    )
}

export default Label
