import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboardheader from '../../Components/DashboardHeader/Dashboardheader';
import Footer from "../../Components/Footer/Footer";
import AuthorsTable from '../../Components/DashboardTable/AuthorsTable';
import ProjectTable2 from '../../Components/DashboardTable/ProjectTable2';

import { BsThreeDotsVertical } from "react-icons/bs";

export default function Tables() {
    const styles = {
        dotstyle: {
            color: "#A0AEC0",
        }

    }
    return (
        <>
            <div className='dashboard-body'>
                <Container fluid>
                    <Row>
                        <Sidebar />
                        <Col md={9}>
                            <Dashboardheader />

                            <div className='table-box auth-table'>
                                <Row>
                                    <Col md={12} className='justify-content-between d-flex align-items-center' >
                                        <h4 className='mb-2'>Authors Table</h4>                                       
                                    </Col>
                                    </Row>
                                    <AuthorsTable />

                              

                            </div>


                            <div className='table-box'>
                                <Row>
                                    <Col md={12} className='justify-content-between d-flex align-items-center' >
                                        <h4 className='mb-2'>Projects</h4>
                                        <a href='' style={styles.dotstyle} ><BsThreeDotsVertical /></a>
                                    </Col>

                                </Row>
                                <ProjectTable2 />
                            </div>


                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
