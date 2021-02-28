import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Row, Col, Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const TopNav = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    page,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const [videoModalActive, setVideomodalactive] = useState(false);
    const history = useHistory();

    return (
        <section
            {...props}
            className={outerClasses}
        >

            <Navbar style={{ backgroundColor: '#222831' }}   >
                <Navbar.Brand > <img src={require('../../assets/images/logomain.png')} style={{ width: '8em', marginLeft: '15px', marginTop: '10px' }} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Link to="/dashboard">
                    Home
                    </Link>
                <Link to="/coupons">
                    View Coupons
                </Link>
                <Link to="/addCoupon">
                    Add Coupon
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button style={{ float: 'right', marginTop: '-1em', height: '3em', backgroundColor: '#00ADB5', marginRight: '2em', height: '50px' }} onClick={() => { history.push('/') }} > Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
}

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;