import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

import PropTypes from 'prop-types';
import './index.scss';

import Nav from '../nav/nav';
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Interests from '../interests/interests';
import Education from '../education/education';
import Intro from '../intro/intro';
import Hook from '../../containers/hook'
import Animation from '../animation/animation';
import End from '../../containers/end';
import Player from '../player/player';

/**
 * Primary UI component for user interaction
 */
const Block = ({...props }) => {

  // Circle animation
  // if (props.content === 'main') {
  //   const circle = document.querySelector('.hook:after');
  //   console.log(circle);
  // }

  // const { ref, inView } = useInView({
  //   threshold: 0
  // });




  

  return (
    <div className={`main-block ${props.grid}`}>
      
      {props.content === 'intro' &&
          <Intro />
        }
      {props.content === 'player' &&
        <Player />
      }

      {props.content === 'main' &&
      <div id="main-container">
        <Nav />
        <div className="block-content" id="main">
          <Hook />
          <Experience/>
          <Skills />
          <Education/>
          <Interests />
          <End />
        </div>
      </div>
      }

      {props.content === 'animation' &&
        <Animation />
      }
    </div>
  );
};

Block.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Block.defaultProps = {
//   backgroundColor: null,

// };

export default Block;
