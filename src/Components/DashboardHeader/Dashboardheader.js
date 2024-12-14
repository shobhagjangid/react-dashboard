import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FaUser, FaCog, FaBell } from 'react-icons/fa';


export default function Dashboardheader() {
    return (
        <div className='dashboard-top-nav'>
            <Row>
                <Col md={6}>
                    <div className='let-nav'>
                        <p className='mb-0'><small>Pages / Profile</small></p>
                        <p className='mb-0'>Profile</p>
                    </div>
                </Col>


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

                        <a href='#'><FaUser /> Sign In</a>
                        <a href='#'><FaCog /></a>
                        <a href='#'><FaBell /></a>

                    </div>
                </Col>
            </Row>





        </div>
    )
}
