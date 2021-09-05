import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';


class Navigation extends Component {
    state = {
        isNavOpen: false,
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">ResTauRanT</NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar className="ms-auto">
                                <NavItem>
                                    <Link to="/" className="nav-link active" >Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link " >Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link " >About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link" >Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Navigation;