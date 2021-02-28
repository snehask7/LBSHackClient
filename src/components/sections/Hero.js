import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import '../../App.css';
import { useHistory } from 'react-router-dom';

import { Row, Col ,Button, Form} from 'react-bootstrap';

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

  const history = useHistory();

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
              <img src={require('../../assets/images/mainlogo.JPG')} style={{ width: '7em',  marginLeft: '2em' }} />
              <Button style={{ float: 'right',height:'3em',backgroundColor:'#0f0f0f',marginRight:'22.5em',marginTop:'-3em', borderRadius:"2rem", border:"none", padding:"0 30px", fontSize:"1rem", fontFamily: "'Roboto Mono', monospace"}}  > <Row style={{ fontSize:"0.5rem"}}>DOWNLOAD ON THE</Row> <Row>App Store<span class="iconify" data-icon="ant-design:apple-filled" data-inline="false" style={{ marginLeft:'10px', fontSize:"1.3em"}}></span></Row></Button>
              <Button style={{ float: 'right',height:'3em',backgroundColor:'#0f0f0f',marginRight:'12em',marginTop:'-3em', borderRadius:"2rem", border:"none", padding:"0 30px", fontSize:"1rem", fontFamily: "'Roboto Mono', monospace"}}  > <Row style={{ fontSize:"0.5rem"}}>GET IT ON</Row> <Row>Google Play<span class="iconify" data-icon="logos-google-play-icon" data-inline="false" style={{ marginLeft:'10px', fontSize:"1em"}}></span></Row></Button>
              <Button onClick={()=>{history.push('/login')}}style={{ float: 'right',height:'3em',backgroundColor:'#00ADB5',marginRight:'2em',marginTop:'-3em', borderRadius:"2rem", border:"none", fontSize:"1rem", fontFamily: "'Roboto Mono', monospace"}}  > Company Login</Button>
      <div className="container-sm">
        <div className={innerClasses}>
           
          <div className="hero-content">

          

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: '#F3B340'}}>
              Welcome to  <span style={{color: '#00ADB5'}}>Tripity</span>
            </h1>

            <h2 style={{ color: '#F3B340', fontSize:"1.5em", fontWeight: "normal"}}>Go Sustainable, Earn Rewards.</h2>

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