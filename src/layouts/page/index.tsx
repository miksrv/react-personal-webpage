import React from 'react'

import './index.sass'

interface IPageLayout {
    children: React.ReactChild
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {
    return (
        <div className='pageLayout'>
            {children}
        </div>
    )
}

export default PageLayout
