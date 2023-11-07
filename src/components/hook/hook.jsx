import React, { useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import portrait from '../../assets/images/me.jpg'

/**
 * Primary UI component for user interaction
 */
const Hook = ({getHookData, HookData, ...props }) => {

  useEffect(() => {

    // Fetch Data
    const fetchData = async() => {
      await getHookData();
    }
    fetchData();

    
  }, [])
  
  const [hasSparkle, setHasSparkle] = useState(false);

  useEffect(() => {
    // Animate sparkle
    let block = document.querySelector('#main');
    let sparkle = document.querySelector('#sparkle');
    let circle = document.querySelector('#hook');
    // let circleBefore = window.getComputedStyle('circle', :b)

    // console.log(sparkle);
  
    block.addEventListener('scroll', (event) => {
      if (sparkle && !sparkle.classList.contains('sparkle-animate')) {
        sparkle.classList.add('sparkle-animate');
        // console.log(block);
        // block.scrollTop += sparkle.offsetTop;
        // console.log(sparkle.offsetTop);
      }
      if (circle && !circle.classList.contains('before-animated')) {
        circle.classList.add('before-animated');
      }
    })

  }, [hasSparkle])


  if (HookData) {
    return (
      <section id='hook'>
        {/* <img src={portrait} alt="" class="portrait"/> */}
        <span className="hook-title">Bienvenue !</span>
        <div id="sparkle" ref={setHasSparkle}></div>
        <div className="hook-intro">
          {HookData.map((item, id) => {
            let intro = item.attributes.description;
            const parser = new DOMParser();
            let introHTML = parser.parseFromString(intro, "text/html").body.innerHTML;
            return (
              <div className="hook-content" key={`intro-${id}`} dangerouslySetInnerHTML={{__html: introHTML}}>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

};

Hook.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Hook.defaultProps = {
//   backgroundColor: null,

// };

export default Hook;
