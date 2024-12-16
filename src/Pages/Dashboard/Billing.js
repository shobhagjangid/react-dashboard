import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboardheader from '../../Components/DashboardHeader/Dashboardheader';
import Footer from "../../Components/Footer/Footer"

export default function Billing() {
    return (
        <>
         <div className='dashboard-body'>
            <Container fluid>
                <Row>
                    <Sidebar />
                    <Col md={9}>
                        <Dashboardheader />
                    
                    <h2>Billing</h2>


        <Footer/>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}
