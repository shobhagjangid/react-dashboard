import React from 'react';
import { Col } from 'react-bootstrap';
import weblogo from '../../Assets/Logop.png';

export default function Sidebar() {
    return (
        <>
            <Col md={3}>
            <div className='Sidebar-box'>
                <a Link href="/">
                    <img src={weblogo} className='img-fluid' alt='logo'></img>
                </a>
                </div>
            </Col>
        </>
    )
}
