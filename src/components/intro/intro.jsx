import React from 'react';
import './index.scss';


import linkedIn from '../../assets/images/linkedIn.svg'
import download from '../../assets/images/download.svg'

const Intro = () => {
  return (
    <div className="intro">
      <div className='intro-description'>
        <h1>
        <p className="name">
          Sandrine M'ZE
        </p>
        <p>Développeuse<br/>front-end</p>
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

export default Intro;
