import React from 'react';
import weblogo from '../../Assets/Logop.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsBoxFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
export default function Header() {
    return (
        <>



            <Navbar collapseOnSelect expand="lg" className=" navbar-custom">
                <Container className='nav-blur-bg'>
                    <Navbar.Brand href="#home">
                        <img src={weblogo} className='img-fluid' alt='logo'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <Nav.Link href="#home"> <BsBoxFill />  Dashboard</Nav.Link>
                            <Nav.Link href="#features"><BiSolidUser /> Profile</Nav.Link>
                            <Nav.Link href="#pricing"><FaUserCircle /> Sign up</Nav.Link>
                            <Nav.Link href="#pricing"><IoKey /> Sign In</Nav.Link>

                        </Nav>

                        <button className='Download-btn ms-auto'>
                            Free Download
                        </button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
