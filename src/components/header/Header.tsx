import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.sass'

type TLinks = {
    title: string
    link: string
}

const links: TLinks[] = [
    {
        title: 'About me',
        link: '/'
    }
]

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <div className='header'>
            <div className='container links'>
                {links.map((item) =>
                    <Link
                        to={item.link}
                        key={item.title}
                        className={location.pathname === item.link ? 'active' : ''}
                    >
                        {item.title}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header
