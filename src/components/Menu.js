import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImBlogger2 } from "react-icons/im";

function Menu() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/"><ImBlogger2 /> Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="text-decoration-none text-secondary" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="text-decoration-none text-secondary" to="/blogs">
                                Blogs
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav.Link>
                                <Link className="text-decoration-none text-secondary" to="/About">
                                    About
                                </Link>
                            </Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu;