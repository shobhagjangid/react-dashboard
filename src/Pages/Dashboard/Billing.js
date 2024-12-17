import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboardheader from '../../Components/DashboardHeader/Dashboardheader';
import Footer from "../../Components/Footer/Footer";
import Cardimg from '../../Assets/CreditCard.png';
import { FaWallet, FaPaypal } from "react-icons/fa6";
import { FaFileAlt, FaTrash, FaPen } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { SlArrowUpCircle, SlArrowDownCircle  } from "react-icons/sl";

export default function Billing() {
    const style = {
        reddown : {
            color:"#f00",
            fontSize:"30px",
            lineHeight:"30px",
        } ,

        greenup : {
            color:"#48BB78",
            fontSize:"30px",
            lineHeight:"30px",     
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

                            <Row>
                                <Col lg='8'>
                                    <Row>
                                        <Col md='6'>
                                            <img src={Cardimg} className='img-fluid' alt='card' />
                                        </Col>

                                        <Col md='3'>
                                            <div className='salary-card'>
                                                <span><FaWallet /></span>
                                                <h6>Wallet</h6>
                                                <p><small>Belong Interactive</small></p>
                                                <h6>+$2000</h6>
                                            </div>
                                        </Col>

                                        <Col md='3'>
                                            <div className='salary-card'>
                                                <span><FaPaypal /></span>
                                                <h6>Paypal</h6>
                                                <p><small>Freelance Payment</small></p>
                                                <h6>+$455.00</h6>
                                            </div>
                                        </Col>

                                    </Row>

                                    <Row className='mt-4'>
                                        <Col md='12'>
                                            <div className='payment-method'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <p><b>Payment Method</b></p>
                                                    <a href='' className='add-new-card'>
                                                        ADD A NEW CARD
                                                    </a>
                                                </div>

                                                <div className='d-flex justify-content-between align-items-center w-100'>
                                                    <Form className='w-100 mt-3'>
                                                        <Row>
                                                            <Col md='6'>


                                                                <Form.Group className=" custom-payment-opt" controlId="formBasicEmail">

                                                                    <Form.Control type="number" placeholder="7812 2139 0823 XXXX" />

                                                                </Form.Group>

                                                            </Col>
                                                            <Col md='6'>
                                                                <Form.Group className=" custom-payment-opt2" controlId="formBasicEmail">

                                                                    <Form.Control type="number" placeholder="7812 2139 0823 XXXX" />

                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </Form>


                                                </div>

                                            </div>
                                        </Col>
                                    </Row>

                                </Col>

                                <Col lg='4'>
                                    <div className='payment-method h-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className='mb-0' ><b>Invoices</b></h5>
                                            <a href='' className='View-all'>
                                                VIEW ALL
                                            </a>
                                        </div>


                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e'>
                                                <p>March, 01, 2020</p>
                                                <small>#MS-415646</small>
                                            </div>

                                            <div className='file-down'>
                                                <span>$180</span>
                                                <a href='' className='pdf-down'><FaFileAlt /></a>
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e'>
                                                <p>March, 01, 2020</p>
                                                <small>#MS-415646</small>
                                            </div>

                                            <div className='file-down'>
                                                <span>$180</span>
                                                <a href='' className='pdf-down'><FaFileAlt /></a>
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e'>
                                                <p>March, 01, 2020</p>
                                                <small>#MS-415646</small>
                                            </div>

                                            <div className='file-down'>
                                                <span>$180</span>
                                                <a href='' className='pdf-down'><FaFileAlt /></a>
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e'>
                                                <p>March, 01, 2020</p>
                                                <small>#MS-415646</small>
                                            </div>

                                            <div className='file-down'>
                                                <span>$180</span>
                                                <a href='' className='pdf-down'><FaFileAlt /></a>
                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-between align-items-center mt-3'>
                                            <div className='date-e'>
                                                <p>March, 01, 2020</p>
                                                <small>#MS-415646</small>
                                            </div>

                                            <div className='file-down'>
                                                <span>$180</span>
                                                <a href='' className='pdf-down'><FaFileAlt /></a>
                                            </div>

                                        </div>



                                    </div>
                                </Col>

                            </Row>

                            <Row className='mt-4'>

                                <Col md={7}>
                                    <div className='payment-method h-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className='mb-0' ><b>Billing Information</b></h5>

                                        </div>

                                        <div className='billing-detail'>
                                            <div className='biller-name'>
                                                <p>Oliver Liam</p>
                                                <p>
                                                    <small>
                                                        Company Name: Viking Burrito </small>
                                                    <small> Email Address: oliver@burrito.com  </small>
                                                    <small>VAT Number: FRB1235476
                                                    </small>

                                                </p>
                                            </div>

                                            <div className='action'>
                                                <a href='/' className='delete'>
                                                    <FaTrash /> DELETE
                                                </a>

                                                <a href='/' className='edit'>
                                                    <FaPen /> EDIT
                                                </a>
                                            </div>

                                        </div>

                                        <div className='billing-detail'>
                                            <div className='biller-name'>
                                                <p>Oliver Liam</p>
                                                <p>
                                                    <small>
                                                        Company Name: Viking Burrito </small>
                                                    <small> Email Address: oliver@burrito.com  </small>
                                                    <small>VAT Number: FRB1235476
                                                    </small>

                                                </p>
                                            </div>

                                            <div className='action'>
                                                <a href='/' className='delete'>
                                                    <FaTrash /> DELETE
                                                </a>

                                                <a href='/' className='edit'>
                                                    <FaPen /> EDIT
                                                </a>
                                            </div>

                                        </div>

                                        <div className='billing-detail'>
                                            <div className='biller-name'>
                                                <p>Oliver Liam</p>
                                                <p>
                                                    <small>
                                                        Company Name: Viking Burrito </small>
                                                    <small> Email Address: oliver@burrito.com  </small>
                                                    <small>VAT Number: FRB1235476
                                                    </small>

                                                </p>
                                            </div>

                                            <div className='action'>
                                                <a href='/' className='delete'>
                                                    <FaTrash /> DELETE
                                                </a>

                                                <a href='/' className='edit'>
                                                    <FaPen /> EDIT
                                                </a>
                                            </div>

                                        </div>


                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className='payment-method h-100'>
                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                            <h5 className='mb-0' ><b>Your Transactions</b></h5>
                                            <p className='mb-0'><IoCalendarOutline /> <small>23 - 30 March 2020</small></p>
                                        </div>

                                        <p><small>NEWEST</small></p>

                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e transaction-deal'>
                                                <span style={style.reddown}>
                                            <SlArrowDownCircle />
                                            </span>
                                            <span>
                                                <p>Netflix</p>
                                                <small>27 March 2020, at 12:30 PM</small>
                                                </span>
                                            </div>

                                            <div className='file-down'>
                                                <span className='text-danger'> <b> -$2500 </b></span>
                                                
                                            </div>

                                        </div>


                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e transaction-deal'>
                                                <span style={style.greenup}>
                                                <SlArrowUpCircle />
                                            </span>
                                            <span>
                                                <p>Netflix</p>
                                                <small>27 March 2020, at 12:30 PM</small>
                                                </span>
                                            </div>

                                            <div className='file-down'>
                                                <span className='text-success'> <b> -$2500 </b></span>
                                                
                                            </div>

                                        </div>

                                        <p><small>YESTERDAY</small></p>


                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e transaction-deal'>
                                                <span style={style.greenup}>
                                                <SlArrowUpCircle />
                                            </span>
                                            <span>
                                                <p>Stripe</p>
                                                <small>26 March 2020, at 13:45 PM</small>
                                                </span>
                                            </div>

                                            <div className='file-down'>
                                                <span className='text-success'> <b> -$800 </b></span>
                                                
                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e transaction-deal'>
                                                <span style={style.greenup}>
                                                <SlArrowUpCircle />
                                            </span>
                                            <span>
                                                <p>HubSpot</p>
                                                <small>26 March 2020, at 12:30 PM</small>
                                                </span>
                                            </div>

                                            <div className='file-down'>
                                                <span className='text-success'> <b> -$1700 </b></span>
                                                
                                            </div>

                                        </div>


                                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                                            <div className='date-e transaction-deal'>
                                                <span style={style.reddown}>
                                                <SlArrowDownCircle />
                                            </span>
                                            <span>
                                                <p>Webflow</p>
                                                <small>26 March 2020, at 05:00 AM</small>
                                                </span>
                                            </div>

                                            <div className='file-down'>
                                                <span className='text-danger'> <b> -$987 </b></span>
                                                
                                            </div>

                                        </div>

                                    </div>
                                </Col>




                            </Row>



                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
