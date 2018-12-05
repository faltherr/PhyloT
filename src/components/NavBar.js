import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import main_logo from '../images/SeqSimLogo.png'

import '../styles/navbar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <div className='nav-name-logo-container'>
                            <img src={main_logo} className='nav-logo' alt='main logo'/>
                            <a style={{textDecoration:'none', color:'#777'}} href="/">SeqSim</a>
                        </div>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavDropdown eventKey={3} title="Build a Synthetic Dataset" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href='/generate'>Get Started</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.2} href='/generate/biom_selector'>Generate From BIOM FILE</MenuItem>
                        <MenuItem eventKey={3.3} href='/generate/community_selector'>Select Custom Community</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="/">
                        Learn More
                    </NavItem>
                    <NavItem eventKey={2} href="/login">
                        Login/Register
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}