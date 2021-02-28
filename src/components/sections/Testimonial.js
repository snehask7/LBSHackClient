import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Partners',
  };

  const sectionHeader2 = {
    title: 'Testimonials',
  };

  return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <table style={{width:'100%', marginLeft:'3%'}}>
            <tr>
              <td>
                <img src={require('../../assets/images/amazon.png')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/flipkart.jpeg')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/fox.PNG')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/unilever.PNG')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
            </tr>
            <tr>
              <td>
                <br></br>
              </td>
              <td>
              <br></br>
              </td>
              <td>
              <br></br>
              </td>
              <td>
              <br></br>
              </td>
            </tr>
            <tr>
            <td>
                <img src={require('../../assets/images/burger.jpg')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/piza.jpg')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/dress.png')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
              <td>
              <img src={require('../../assets/images/bed.jpg')} style={{width:'150px', borderRadius:'50%'}} />
              </td>
            </tr>
          </table>

        </div>
      </div>
    </section>
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader2} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Tripity's reward system encourages me to play my part in conserving the environment. I hope to keep up my streak and impress my friends!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Beverly Carter</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0" style={{color:'#00ADB5'}}>Tripity Mobile App</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Everyone around me is using Tripity, I've started using Tripity too. It's so easy to use. It makes taking the bus to school everyday something I look forward to.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">John Doe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0" style={{color:'#00ADB5'}}>Tripity Mobile App</a>
                  </span>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I'm proud to be a part of Tripity's initiative to promote sustainability!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <a href="#0" style={{color:'#00ADB5'}}>Tripity Mobile App</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: '#101316', padding:'5% 3%', textAlign: 'center'}} >
              <div className="features-tiles-item-image mb-16">
              <span class="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
              <span class="iconify" data-icon="akar-icons:facebook-fill" data-inline="false" style={{ marginLeft:'5em'}}></span>
              <span class="iconify" data-icon="akar-icons:twitter-fill" data-inline="false" style={{ marginLeft:'5em'}}></span>
              
              
              </div>
              <p class="copy-right"  style={{ color:'#00adb5',fontSize:'15px', textAlign: 'center', marginTop:'1.5%'}}>© 2021 404 Brain Not Found.</p>
      </section>
    </>
    
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;