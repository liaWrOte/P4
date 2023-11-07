import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Primary UI component for user interaction
 */
const Loader = ({...props }) => {

  return (
    <div id="spinner">

        <div id="loader">
        
            <div id="loading">
                <div className="circle" id="first"></div>
                <div className="circle"  id="second"></div>
                <div className="circle"  id="third"></div>
            </div>
            
            <div>
                <h1>CHARGEMENT</h1>
            </div>
        
        </div>
    </div>
  );
};

Loader.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Loader.defaultProps = {
//   backgroundColor: null,

// };

export default Loader;
