import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import weblogo from '../../Assets/Logop.png';
import { FaHome, FaCreditCard, FaUser, FaFile } from "react-icons/fa";
import { IoStatsChartSharp, IoRocket } from "react-icons/io5";

export default function Sidebar() {

    return (
        <>
            <Col md={3}>
                <div className='Sidebar-box'>
                    <a Link href="/" className='logo-sidebar' >
                        <img src={weblogo} className='img-fluid' alt='logo'></img>
                    </a>


                    <ul className='sidebar-nav mb-4'>
                        <li>
                            <NavLink to="/Dashboard" exact activeClassName="active">

                                <span><FaHome /> &nbsp;</span>
                                Dashboard

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tables" exact activeClassName="active">

                                <span><IoStatsChartSharp /> &nbsp;</span>
                                Tables


                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/Billing" exact activeClassName="active">

                                <span><FaCreditCard /> &nbsp;</span>
                                Billing

                            </NavLink>

                        </li>


                    </ul>

                    <h5 className='mb-3 '>ACCOUNT PAGES</h5>

                    <ul className='sidebar-nav'>

                        <li>
                            <NavLink to="/Profile" exact activeClassName="active">

                                <span><FaUser /> &nbsp;</span>
                                Profile

                            </NavLink>
                        </li>
                        <li>
                            <a href='/Login' className='siderbar-navigation'>
                                <span><FaFile /> &nbsp;</span>
                                Sign In
                            </a>

                        </li>
                        <li>
                            <a href='/Signup' className='siderbar-navigation'>
                                <span><IoRocket /> &nbsp;</span>
                                Sign Up
                            </a>


                        </li>


                    </ul>
                </div>
            </Col>
        </>
    )
}
