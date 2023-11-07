import React from 'react';

import './index.scss';

const PlayerSvg = ({...props}) => {
  return (
    <svg
      id="player-svg"
      data-name="Calque 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 247 190.77"
      className={props.song && props.isPlaying ? `start` : ``}
    >
      <g id="Calque_1-2" data-name="Calque 1">
        <rect className="cls-6" x="27.64" y="13.35" width="215.36" height="166.07" rx="10" ry="10"/>
        <g id="disk">
        {/* <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100"> */}
        {/* </pattern> */}
          <circle className="cls-7" cx="95.39" cy="95.39" r="95.39"/>
          <image href={props.cover} x="0" y="0" width="190.78" height="190.78" />
          <circle className="cls-2" cx="95.39" cy="95.39" r="26.38"/>
          <circle className="cls-1" cx="95.39" cy="95.39" r="4.43"/>
        </g>
        <g id="reader">
          <polyline className="cls-4" points="216.31 38.58 175.69 124.72 147.31 143.06"/>
          <line className="cls-5" x1="127.79" y1="152.62" x2="138.53" y2="147.36"/>
          <line className="cls-3" x1="138.53" y1="147.31" x2="149.28" y2="142.06"/>
        </g>
      </g>
    </svg>
  );
};

export default PlayerSvg;
