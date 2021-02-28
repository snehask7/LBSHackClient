// To display all events
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

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

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const fetchCoupons = () => {
    var companyID = Cookies.get('companyID')
    axios.get(`${process.env.REACT_APP_API}/coupon`, {
      params: {
        companyID
      }
    })
      .then(response => {
        console.log(response);

      })
      .catch(err => alert('error fetching'));
  }

  useEffect(() => {
    fetchCoupons();
  }, [])

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={tilesClasses}>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCoupons;