import React from 'react';
import Dashboardheader from '../../Components/DashboardHeader/Dashboardheader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../Components/Footer/Footer';

import Card from '../../Components/DashboardCard/Card';
import { FaWallet, FaUsers, FaGlobe, FaShoppingCart } from "react-icons/fa";

import DashTable from '../../Components/DashboardTable/DashTable';




import Coverbg from '../../Assets/singup-cover.jpg';

export default function DashbardHome() {
    const cardsData = [
        {
            title: "Today's Moneys",
            value: "$53,000",
            percentage: 55,
            isPositive: true,
            icon: <FaWallet size={20} />,
        },
        {
            title: "Today's Users",
            value: "2,300",
            percentage: 5,
            isPositive: true,
            icon: <FaUsers size={20} />,
        },
        {
            title: "New Clients",
            value: "+3,020",
            percentage: -14,
            isPositive: false,
            icon: <FaGlobe size={20} />,
        },
        {
            title: "Total Sales",
            value: "$173,000",
            percentage: 8,
            isPositive: true,
            icon: <FaShoppingCart size={20} />,
        },
    ];


    return (
        <>
            <div className='dashboard-body'>
                <Container fluid>
                    <Row>

                        <Sidebar />

                        <Col md={9}>

                            <Dashboardheader />


                            <div className='row' >
                                {cardsData.map((card, index) => (
                                    <Card
                                        key={index}
                                        title={card.title}
                                        value={card.value}
                                        percentage={card.percentage}
                                        isPositive={card.isPositive}
                                        icon={card.icon}
                                    />
                                ))}
                            </div>





                            <DashTable />








                            <Footer />
                        </Col>


                    </Row>


                </Container>




            </div>


        </>
    )
}
