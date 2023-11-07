import React from 'react';
import './index.scss';

import Nav from '../nav/nav';
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Interests from '../interests/interests';
import Education from '../education/education';
import Intro from '../intro/intro';
import Hook from '../../containers/hook'
import Animation from '../animation/animation';
import Footer from '../footer/footer';
import Player from '../player/player';

const Block = ({...props }) => {
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
          <Footer />
        </div>
      </div>
      }

      {props.content === 'animation' &&
        <Animation />
      }
    </div>
  );
};

export default Block;
