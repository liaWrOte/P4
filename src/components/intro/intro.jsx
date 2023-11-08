import React from 'react';
import './index.scss';

import linkedIn from '../../assets/images/linkedin.svg';
import download from '../../assets/images/download.svg';
import github from '../../assets/images/github.svg';

const Intro = () => {
  return (
    <div className="intro">
      <div className='intro-description'>
        <h1>
        <p className="name">
          Sandrine M'ZE
        </p>
        <p>Développeuse <br/>front-end</p>
        <strong>créative</strong>
        </h1>
        <div className='intro-links'>
          <div>
            <a href="https://www.linkedin.com/in/sandrinemze/">
              <img src={linkedIn} alt="Lien vers LinkedIn" target="_blank"/>
            </a>
            <a href="https://github.com/liaWrOte">
              <img src={github} alt="Lien vers Github" target="_blank"/>
            </a>
          </div>
          <div>
            <a href="" className='cv'>
              <span>CV</span>
              <img src={download} alt="Télécharger mon CV" target="_blank"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
