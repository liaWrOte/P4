import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const SparkleSvg = ({...props}) => {

  // [is]

  // if (props.isPlaying) {

  // }
  return (
    <svg className='ring-svg'>
        {/* <ellipse /> */}
        <circle className="ring" cx="50" y="c50"/>
    </svg>
  );
};

SparkleSvg.propTypes = {
  /**
   * Show items SparkleSvg of firt level
   */
  displaySparkleSvg: PropTypes.bool.isRequired,
  /**
   * Show items SparkleSvg of second level
   */
  displaySparkleSvgItem: PropTypes.bool,

};

SparkleSvg.defaultProps = {
  displaySparkleSvg: false,
  displayplayerItem: false,
};

export default SparkleSvg;

