import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Row, Col ,Button} from 'react-bootstrap'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <br></br>
              <img src={require('../../assets/images/logomain.png')} style={{ width: '10em',  marginLeft: '2em' }} />
              <Button style={{ float: 'right',height:'3em',backgroundColor:'#00ADB5',marginRight:'2em',marginTop:'-5em'}}  > Company Login</Button>
      <div className="container-sm">
     
        <div className={innerClasses}>
           
          <div className="hero-content">
           
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: '#F3B340'}}>
              Welcome to  <span style={{color: '#00ADB5'}}>Tripity</span>
            </h1>
            <div className="container-xs" >
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" >
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;