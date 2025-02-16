import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to='/Login' className='siderbar-navigation'>
                                <span><FaFile /> &nbsp;</span>
                                Sign In
                            </Link>

                        </li>
                        <li>
                            <Link to='/Signup' className='siderbar-navigation'>
                                <span><IoRocket /> &nbsp;</span>
                                Sign Up
                            </Link>


                        </li>


                    </ul>

                    <div className="help-card">
      {/* Question Icon */}
      <div className="icon-container">
        <span className="question-icon">?</span>
      </div>

      {/* Text Content */}
      <div className="text-content">
        <h2 className="title">Need help?</h2>
        <p className="subtitle">Please check our docs</p>
      </div>

      {/* Button */}
      <button className="help-button">DOCUMENTATION</button>
    </div>
                </div>
            </Col>
        </>
    )
}
