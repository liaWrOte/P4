import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';


import linkedIn from '../../assets/images/linkedIn.svg'
import download from '../../assets/images/download.svg'

/**
 * Primary UI component for user interaction
 */
const Intro = ({...props }) => {

  return (
    <div className="intro">
      <div className='intro-description'>
        <h1>
        <p className="name">
          Sandrine M'ZE
        </p>
        <p>Développeuse front-end</p>
        <strong>créative</strong>
        </h1>
        <div className='intro-links'>
          <a href="https://www.linkedin.com/in/sandrinemze/">
            <img src={linkedIn} alt="Lien vers LinkedIn" target="_blank"/>
          </a>
          <span>|</span>
          <a href="">
            <span>Mon CV</span>
            <img src={download} alt="Télécharger mon CV" target="_blank"/>
          </a>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Intro.defaultProps = {
//   backgroundColor: null,

// };

export default Intro;
