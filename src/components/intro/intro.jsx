import React from 'react';
import './index.scss';

import linkedIn from '../../assets/images/linkedin.svg';
import download from '../../assets/images/download.svg';
import github from '../../assets/images/github.svg';
import instagram from '../../assets/images/instagram.svg';
import resume from '../../assets/resume/sandrine_mze_creative_developer_resume.pdf'

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
            <a href="https://www.linkedin.com/in/sandrinemze/" target="_blank">
              <img src={linkedIn} alt="Lien vers LinkedIn"/>
            </a>
            <a href="https://github.com/liaWrOte" target="_blank">
              <img src={github} alt="Lien vers Github"/>
            </a>
            <a href="https://www.instagram.com/lia_foliedouce/" target="_blank">
              <img src={instagram} alt="Lien vers Instagram"/>
            </a>
          </div>
          <div>
            <a href={resume} className='cv' target="_blank">
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
