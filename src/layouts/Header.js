import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

import data from '../data/navigation'

const Header = () => {
    const [activeItem, handleItemClick] = useState('about');

    window.addEventListener("hashchange", () => {
        let hash = window.location.hash.substring(1);

        handleItemClick(hash)
    })

    return (
        <Menu fixed={'top'} color={'green'} secondary  inverted>
            <Container>
                {data.map((item, key) => (
                    <Menu.Item
                        key={key}
                        name={item.name}
                        href={'#' + item.link}
                        active={activeItem === item.link}
                        onClick={() => {
                            handleItemClick(item.link)
                        }}
                    />
                ))}
                {/*<Menu.Item as={NavLink} exact to='/'>Main</Menu.Item>*/}
                {/*<Menu.Item as={NavLink} to='/blog'>Blog</Menu.Item>*/}
            </Container>
        </Menu>
    )
}

export default Header