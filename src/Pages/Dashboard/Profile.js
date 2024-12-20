import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboardheader from '../../Components/DashboardHeader/Dashboardheader';
import Footer from "../../Components/Footer/Footer";
import Coverbg from "../../Assets/singup-cover.jpg";
import Authorpro from "../../Assets/author.png";
import { BsBoxFill, BsFileEarmarkPlusFill, BsWrenchAdjustable } from "react-icons/bs";

import Form from 'react-bootstrap/Form';
import { color } from 'framer-motion';

export default function Profile() {
    const style = {
        coverbgStyle: {
            background: "none",
            color: "#fff",
        },
        coverbox: {
            marginTop: "-88px"
        },
        switchSize: {
            fontSize: '14px',
        },
        editLink: {
            color: '#4FD1C5',
            textDecoration: 'none',
            lineHeight: "50px"
        }
    }
    return (
        <div className='dashboard-body'>
            <Container fluid>
                <Row>
                    <Sidebar />
                    <Col md={9}>
                        <div className='dashboard-top-nav' style={style.coverbgStyle} >
                            <Row>
                                <Col md={6}>
                                    <div className='let-nav'>
                                        <p className='mb-0'><small>Pages / Profile</small></p>
                                        <p className='mb-0'>Profile</p>
                                    </div>
                                </Col>
                                <Dashboardheader />

                            </Row>
                        </div>


                        <div className='cover-bg' style={style.coverbox} >
                            <img src={Coverbg} className='img-fluid' alt='cover' />
                        </div>

                        <Row>

                            <Col md="12 mb-4">
                                <div className='author-profile'>
                                    <Row className='justify-content-between'>
                                        <Col md='4'>
                                            <div className='author-bio'>
                                                <img src={Authorpro} className='img-fluid' alt='author' />
                                                <div className='user-names'>
                                                    <h5 className='mb-0'><b>Esthera Jackson</b></h5>
                                                    <p className='mb-0'>esthera@simmmple.com</p>
                                                </div>
                                            </div>
                                        </Col>


                                        <Col md='6'>
                                            <ul className='overlay-links'>
                                                <li className='active-li'><a href='/'> <BsBoxFill /> OVERVIEW </a></li>
                                                <li><a href='/'> <BsFileEarmarkPlusFill /> TEAMS </a></li>
                                                <li><a href='/'> <BsWrenchAdjustable /> PROJETS </a></li>
                                            </ul>

                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className='switch-panel h-100'>
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h5 className='mb-0' ><b>Platform Settings</b></h5>

                                    </div>

                                    <p style={style.switchSize}>ACCOUNT</p>

                                    <Form className='switch-box-heading mb-3'>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                            label="Email me when someone follows me"
                                        />


                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch2"
                                            label="Email me when someone answers on my post"
                                        />

                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch3"
                                            label="Email me when someone mentions me"
                                        />

                                    </Form>

                                    <p style={style.switchSize}>APPLICATION</p>


                                    <Form className='switch-box-heading'>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch4"
                                            label="New launches and projects"
                                        />


                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch5"
                                            label="Monthly product updates"
                                        />

                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch6"
                                            label="Subscribe to newsletter"
                                        />

                                    </Form>

                                </div>
                            </Col>


                            <Col md={4}>
                                <div className='switch-panel h-100' style={style.switchSize} >
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h5 className='mb-0' ><b>Profile Information</b></h5>

                                    </div>
                                    <p >Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                    <p> <b>Full Name :</b>  Alec M. Thompson</p>
                                    <p> <b>Mobile: </b>   (44) 123 1234 123</p>
                                    <p><b>Email:</b>    alecthompson@mail.com</p>
                                    <p> <b>Location:  </b>  United States</p>
                                    <p><b>Social Media:</b> </p>

                                </div>


                            </Col>

                            <Col md={4}>
                                <div className='switch-panel h-100' style={style.switchSize} >
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h5 className='mb-0' ><b>Conversations</b></h5>

                                    </div>

                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <div className="author-bio">
                                            <img className="img-fluid" alt="author" src={Authorpro} width={50} height={50} />
                                            <div className="user-names">
                                                <p className="mb-0"><b>Esthera Jackson</b></p>
                                                <p className="mb-0">esthera@simmmple.com</p>
                                            </div>
                                        </div>
                                        <a href='/' className='edit-link' style={style.editLink}>Edit</a>

                                    </div>

                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <div className="author-bio">
                                            <img className="img-fluid" alt="author" src={Authorpro} width={50} height={50} />
                                            <div className="user-names">
                                                <p className="mb-0"><b>Esthera Jackson</b></p>
                                                <p className="mb-0">esthera@simmmple.com</p>
                                            </div>
                                        </div>
                                        <a href='/' className='edit-link' style={style.editLink}>Edit</a>

                                    </div>

                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <div className="author-bio">
                                            <img className="img-fluid" alt="author" src={Authorpro} width={50} height={50} />
                                            <div className="user-names">
                                                <p className="mb-0"><b>Esthera Jackson</b></p>
                                                <p className="mb-0">esthera@simmmple.com</p>
                                            </div>
                                        </div>
                                        <a href='/' className='edit-link' style={style.editLink}>Edit</a>

                                    </div>

                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <div className="author-bio">
                                            <img className="img-fluid" alt="author" src={Authorpro} width={50} height={50} />
                                            <div className="user-names">
                                                <p className="mb-0"><b>Esthera Jackson</b></p>
                                                <p className="mb-0">esthera@simmmple.com</p>
                                            </div>
                                        </div>
                                        <a href='/' className='edit-link' style={style.editLink}>Edit</a>

                                    </div>

                                    <div className='d-flex justify-content-between mt-2 mb-2'>
                                        <div className="author-bio">
                                            <img className="img-fluid" alt="author" src={Authorpro} width={50} height={50} />
                                            <div className="user-names">
                                                <p className="mb-0"><b>Esthera Jackson</b></p>
                                                <p className="mb-0">esthera@simmmple.com</p>
                                            </div>
                                        </div>
                                        <a href='/' className='edit-link' style={style.editLink}>Edit</a>

                                    </div>
                                    

                                    


                                </div>
                            </Col>

                        </Row>

                        <Footer />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
