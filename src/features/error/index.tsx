import React from 'react'
import PageLayout from '../../layouts/page'

import './index.sass'

const Error: React.FC = () => {
    return (
        <PageLayout>
            <div className='error'>
                <h1>Oops!</h1>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed<br />had its name changed or is temporarily unavailable.</p>
            </div>
        </PageLayout>
    )
}

export default Error
