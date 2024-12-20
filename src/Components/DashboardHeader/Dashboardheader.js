import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FaUser, FaCog, FaBell } from 'react-icons/fa';


export default function Dashboardheader() {
    return (
        


                <Col md={6}>
                    <div className='right-nav'>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>

                        <a href='/login'><FaUser /> Sign In</a>
                        <a href='#'><FaCog /></a>
                        <a href='#'><FaBell /></a>

                    </div>
                </Col>
           





      
    )
}
