import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );



   return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <h2 style={{textAlign:"center"}}>Tripity Up-close</h2>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs fw-600 tt-u mb-8" style={{ color:"#F3B340"}}>
                  Tripity Mobile App
                  </div>
                <h3 className="mt-0 mb-12">
                  Profile and Achievements Page
                  </h3>
                <p className="m-0">
                  This page displays the total points one currently has using which he/she can claim exciting coupons. The user's current streak of using public transport on daily basis can also be viewed. The user can also view their various achievements on completion of a specific objective.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}

                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/profile.png')}
                  alt="Features split 01" style={{width:'250px',height:'470px'}}
                   />
                
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
              <div className="text-xxs fw-600 tt-u mb-8" style={{ color:"#F3B340"}}>
                  Tripity Mobile App
                  </div>
                <h3 className="mt-0 mb-12">
                  Offers Page
                  </h3>
                <p className="m-0">
                  This page allows the user to claim exciting coupons in exchange for their reward points. Various coupons can be searched and the points can be redeemed in accordance with the user's choice.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/offers.png')}
                  alt="Features split 01" style={{width:'250px',height:'470px'}}
                   />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <div className="text-xxs fw-600 tt-u mb-8" style={{ color:"#F3B340"}}>
                  Tripity 
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;