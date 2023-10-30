import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import portrait from '../../assets/images/me.jpg'

/**
 * Primary UI component for user interaction
 */
const End = ({getHookData, HookData, ...props }) => {

  // useEffect(() => {

  //   // Fetch Data
  //   const fetchData = async() => {
  //     await getHookData();
  //   }
  //   fetchData();

    
  // }, [])

  // if (HookData.attributes) {
  //   return (
  //     <div id='hook'>
  //       {/* <img src={portrait} alt="" class="portrait"/> */}
  //       <span className="hook-title">Bienvenue !</span>
  //       <div id="sparkle" ref={setHasSparkle}></div>
  //       {HookData.attributes.Intro}
  //     </div>
  //   )
  // }

  return (
    <section id="languages" className='end'>THE END</section>
  )

};

End.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// End.defaultProps = {
//   backgroundColor: null,

// };

export default End;
