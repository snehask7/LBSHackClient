import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CountUp from 'react-countup';
import TopNav from '../components/sections/TopNav';

import Barchart from '../components/elements/Barchart.js'
import Piechart from '../components/elements/Piechart.js'
import Doughnutchart from '../components/elements/Doughnutchart.js'
import Linechart from '../components/elements/Linechart.js'

const Dashboard = () => {

    return (
        <>
            <TopNav page="Dashboard" />
            <Container >
                <Card.Title style={{ padding: '3%', fontSize: '4rem', textAlign: 'center', color: '#f3b340' }}>DASHBOARD</Card.Title>
                <Row>
                    <Col sm={8}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <Barchart></Barchart>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <CountUp delay={1} style={{ margin: '0 20px', fontSize: '4.5rem', color: '#f3b340 ' }} duration={10} end={127} />
                            <hr style={{ margin: '0 20px', border: 'none', borderBottom: '2px solid black', width: '75%' }} />
                            <h4 style={{ margin: '20px 0 0 20px', fontSize: '1.25rem', fontWeight: '900', color: '#00adb5', letterSpacing: '0.1em' }}>Coupons Redeemed</h4>
                            <p style={{ margin: '5px 0 0 20px', fontSize: '0.9rem', color: '#747474', lineHeight: '1.25em' }}>The total number of coupons your customers have redeemed.</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <Piechart></Piechart>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <Doughnutchart></Doughnutchart>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <CountUp delay={1} style={{ margin: '0 20px', fontSize: '4.5rem', color: '#f3b340 ' }} duration={10} end={500} />
                            <hr style={{ margin: '0 20px', border: 'none', borderBottom: '2px solid black', width: '75%' }} />
                            <h4 style={{ margin: '20px 0 0 20px', fontSize: '1.25rem', fontWeight: '900', color: '#00adb5', letterSpacing: '0.1em' }}>Total Coupons</h4>
                            <p style={{ margin: '5px 0 0 20px', fontSize: '0.9rem', color: '#747474', lineHeight: '1.25em' }}>The total number of coupons you have put up for sale on the app.</p>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card style={{ minHeight: '300px', padding: '5%', margin: '20px 0' }}>
                            <Linechart></Linechart>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}



export default Dashboard;

// tile with number of coupons, pie chart with customer ages or something, bar chart with months, tag data, analysis on points vs money redeemed