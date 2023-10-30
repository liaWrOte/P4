import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Primary UI component for user interaction
 */
const Title = ({...props }) => {

    return (
    <div className="title">
      <h2>
        <p className="big-title">{props.specs[0]}</p>
        <p  className="small-title">{props.specs[1]}</p>
     </h2>
    </div>
  );
  
};

Title.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Title.defaultProps = {
//   backgroundColor: null,

// };

export default Title;
