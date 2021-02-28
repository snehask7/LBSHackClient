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

const TopNav = ({
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
              <Button style={{ float: 'right',height:'3em',backgroundColor:'#00ADB5',marginRight:'2em',marginTop:'-5em'}}  > Logout</Button>
      <div className="container-sm">
     
        <div className={innerClasses}>
           

        </div>
      </div>
    </section>
  );
}

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;