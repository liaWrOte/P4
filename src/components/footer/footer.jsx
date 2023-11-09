import React from 'react';
import './index.scss';
import '../timeline/index.scss';

const Footer = () => {

  const portfolioSkills = [
    {
      'id' : 0,
      'skill' : 'React',
      'type' : 'hard-skill'
    },
    {
      'id' : 1,
      'skill' : 'React Redux',
      'type' : 'hard-skill'
    },
    {
      'id' : 2,
      'skill' : 'Intersection Observer',
      'type' : 'hard-skill'
    },
    {
      'id' : 3,
      'skill' : 'SVG animation',
      'type' : 'hard-skill'
    },
    {
      'id' : 4,
      'skill' : 'CSS animation',
      'type' : 'hard-skill'
    },
    {
      'id' : 5,
      'skill' : 'GIF | After Effects',
      'type' : 'design'
    },
    {
      'id' : 6,
      'skill' : 'Vite',
      'type' : 'tool'
    },
    {
      'id' : 7,
      'skill' : 'GIT',
      'type' : 'tool'
    },
    {
      'id' : 8,
      'skill' : 'Adobe XD',
      'type' : 'design'
    },
    {
      'id' : 9,
      'skill' : 'Illustrator',
      'type' : 'design'
    },
    {
      'id' : 10,
      'skill' : 'Trello',
      'type' : 'soft-skill'
    },
    {
      'id' : 11,
      'skill' : 'Netlify',
      'type' : 'tool'
    },
    {
      'id' : 12,
      'skill' : 'Heroku',
      'type' : 'tool'
    }
  ]

  return (
    <div className='footer'>
      <p>Ce portfolio a été réalisé avec les outils suivants :</p>
      <ul className='content-skills'>
        {portfolioSkills.length > 0 && portfolioSkills.map((item) => {
          return(
            <li key={item.id} className={item.type}>{item.skill}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Footer;
