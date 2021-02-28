// To display all events
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Card, CardGroup, Col, Row, Button, Container } from 'react-bootstrap'
import { SectionSplitProps } from '../../utils/SectionProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
const ViewCoupons = ({ className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props }) => {
  const [coupons, setCoupons] = useState([])
  const propTypes = {
    ...SectionSplitProps.types
  }

  const defaultProps = {
    ...SectionSplitProps.defaults
  }

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const history = useHistory();

  const [showHeader, setShowHeader] = useState([]);

  const hover = (id) => {
    const values = [...showHeader];
    values[id] = true;
    setShowHeader(values);
  }

  const noHover = (id) => {
    const values = [...showHeader];
    values[id] = false;
    setShowHeader(values);
  }

  const deleteCoupon = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}/Coupon/${id}`)
      .then(response => {
        fetchCoupons()
      })
      .catch(error => alert('Error deleting coupon'));
  }
  const fetchCoupons = () => {
    // var companyID = Cookies.get('companyID')
    var companyID = "603a76c73920194fa3b53786"
    axios.get(`${process.env.REACT_APP_API}/coupon`, {
      params: {
        companyID
      }
    })
      .then(response => {
        var hover = []
        for (var i = 0; i < response.data.length; i++) {
          hover.push(false);
        }
        setShowHeader(hover);
        setCoupons(response.data)
      })
      .catch(err => alert('error fetching'));
  }

  useEffect(() => {
    fetchCoupons();
  }, [])

  return (
    <>
      <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }} >
        <br></br>
        <CardGroup style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', justifyContent: 'left', marginTop: '2em', marginLeft: '10%' }}>
          {
            coupons.map((c, id) => {
              return (
                <Row>
                  <Card style={{ width: '13rem', marginRight: '5em', border: 'dotted', marginBottom: '1em', float: 'left', flex: 1 }} onMouseEnter={e => {
                    hover(id);
                  }}
                    onMouseLeave={e => {
                      noHover(id)
                    }}
                  >
                    {
                      showHeader[id] ?
                        <Card.Header style={{ textAlign: 'right', backgroundColor: '#00adb5' }}>
                          <button onClick={() => {history.push(`/coupon/${c._id}`)}} style={{ border: 'none', backgroundColor: '#00adb5' }}  ><FontAwesomeIcon size="xs-2" style={{ color: '#696969' }} icon={faEdit} />
                          </button>
                          <button onClick={() => deleteCoupon(c._id)} style={{ border: 'none', backgroundColor: '#00adb5' }}  ><FontAwesomeIcon size="xs-2" style={{ color: '#696969' }} icon={faTrash} />
                          </button>
                        </Card.Header>
                        :
                        null
                    }

                    <Card.Body style={{ textAlign: 'center' }}>
                      <p style={{ textAlign: 'right' }}> x{c.NoCoupons}</p>
                      <Card.Title style={{ textAlign: 'center', color: '#a9a9a9', fontFamily: 'Roboto Condensed', fontSize: '25px' }}>COUPON</Card.Title>
                      <Card.Title className="mb-2 " style={{ fontFamily: 'Oswald', fontWeight: 'bold', fontSize: '45px', color: 'black' }}>{c.Description}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted" style={{ fontFamily: 'Roboto Condensed', marginBottom: '-1em' }}><p style={{ fontSize: '20px' }}>{c.Name}</p><p style={{ fontSize: '15px', marginTop: '-1em' }}>Offer valid for {c.Validity}</p></Card.Subtitle>
                      <b style={{ fontSize: '15px' }}>REQUIRES {c.Price} POINTS</b>
                    </Card.Body>
                  </Card>
                </Row>
              )
            })
          }

        </CardGroup>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default ViewCoupons;