import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Input, Row, Col,
} from 'reactstrap';
function Header(props) {
    return (
        <div className={'header'}>
            <Navbar className="navbar-top" color="light" light expand="md">
                <Container>
                    <NavbarBrand className={'navbar-brand'}>Dustlikdon.uz</NavbarBrand>
                    <NavbarToggler/>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">
                                    <div className="position-relative input">
                                        <Input  placeholder={'saytdan izlash'} type="text"/>
                                        <img style={{
                                            position: "absolute",
                                            left: "12px",
                                            top: "12px",
                                            cursor:"pointer"
                                        }} src="images/search.png" alt=""/>
                                    </div>
                                </NavLink>
                            </NavItem>
                            <div>
                                <NavItem>
                                    <NavLink className="language" href="#">На русском</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <button type="button" className="btn btn-outline-success"><img
                                            src="images/vector.png" alt="phone"/>99872 335-41-16
                                        </button>
                                    </NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Navbar className="navbar-top navbar-bottom" color="light" light expand="md">
                <Container>
                    <NavbarBrand className={'navbar-brand'}  href="/">
                        <img className="home" src="images/brand.png" alt=""/>
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Jamiyat haqida</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Struktura</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Yangiliklar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Elektron murojaatlar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Interaktiv xizmatlar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Aloqa</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;