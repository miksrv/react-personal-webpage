import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

const Header = () => {
    return (
        <Menu fixed={'top'} color={'green'} secondary  inverted>
            <Container>
                <Menu.Item as={NavLink} exact to='/'>About me</Menu.Item>
                <Menu.Item as={NavLink} to='/portfolio'>My works</Menu.Item>
                <Menu.Item as={NavLink} to='/blog'>Personal blog</Menu.Item>
            </Container>
        </Menu>
    )
}

export default Header