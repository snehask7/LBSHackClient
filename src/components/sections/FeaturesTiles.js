import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

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


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <h2 style={{textAlign:"center"}}>Who Are We?</h2>
          <p>Tripity is an app that provides incentives to encourage people to use public transport. We endeavour to achieve excellence, innovation and performance in a sustainable manner. Our vision is to help us move one step closer towards achieving a sustainable world by prmoting lesser traffic to curb pollution. </p>
          <h2 style={{textAlign:"center"}}>How To Use Tripity?</h2>
          <p>Every time you decide to use the public transport, simply log on to the Tripity mobile app after you've boarded and scan the QR Code on your device at the scanner on the bus, train or metro. Its as simple as that! Points get added to your Tripity wallet each time you scan, giving you exciting opportunities to purchase coupons from our partners with the coins you've earned. If you get lucky the Tripity app displays a bonus question for you which you can asnwer to get, you guessed it, more points! Getting around has never been better before, so get the Tripity app today and reward yourselves for conserving the environment ech time you use the pulic transport!</p>      

          <h2 style={{textAlign:"center"}}>Why Tripity?</h2>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Promote Sustainability
                    </h4>
                  <p className="m-0 text-sm">
                  Tripity strives to achieve the UN goal of Sustainable cities & communities.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faGlobeAmericas} size="3x" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Reduce Global Warming
                    </h4>
                  <p className="m-0 text-sm">
                    We promote the use of public commutes, reducing traffic and pollution.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faBullseye} size="3x" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Easy To Use
                    </h4>
                  <p className="m-0 text-sm">
                    Our interface is so easy to use, anyone can use it.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faCoins} size="3x" />
                      
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Exclusive Rewards
                    </h4>
                  <p className="m-0 text-sm">
                    Tripity users can redeem exciting coupons in exchange for pointed you've earned!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faHandshake} size="3x" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Trusted Partners
                    </h4>
                  <p className="m-0 text-sm">
                    Tripity has partnered up with globally acclaimed companies to provide you with a comfortable and worry-free experience.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <FontAwesomeIcon icon={faCogs} size="3x" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Scan your QR codes and redeem points in a matter of seconds.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;