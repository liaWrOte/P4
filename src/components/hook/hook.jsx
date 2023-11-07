import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Hook = ({getHookData, HookData}) => {

  useEffect(() => {
    // Fetch Data
    const fetchData = async() => {
      await getHookData();
    }
    fetchData();
  }, [])
  
  const [hasSparkle, setHasSparkle] = useState(false);

  useEffect(() => {
    let block = document.querySelector('#main');
    let sparkle = document.querySelector('#sparkle');
    let circle = document.querySelector('#hook');
  
    block.addEventListener('scroll', (event) => {
      if (sparkle && !sparkle.classList.contains('sparkle-animate')) {
        sparkle.classList.add('sparkle-animate');
      }
      if (circle && !circle.classList.contains('before-animated')) {
        circle.classList.add('before-animated');
      }
    })

  }, [hasSparkle])


  if (HookData) {
    return (
      <section id='hook'>
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
   * Fetch hook Data from strapi
   */
  getHookData: PropTypes.func,
  /**
   * Hook Data array from strapi
   */
  HookData: PropTypes.array,

};

export default Hook;
