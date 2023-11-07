import React, { useState, useEffect } from 'react';
import './index.scss';

const Nav = () => {
  // Handle navigaton active links

  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    section = document.querySelector(e.target.hash);
    scrollToSection(section.id);
    setActiveSection(section.id);
  };

  const scrollToSection = (section) => {
    let block = document.querySelector('#main');
    const element = document.getElementById(section);
    block.scrollTo(0, (element.offsetTop - 100))
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollPosition = event.target.scrollTop;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    let block = document.querySelector('#main');
    block.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleUrlAnchorChange = () => {
      const sectionFromUrl = window.location.hash.substr(1);
      setActiveSection(sectionFromUrl);
    };

    window.addEventListener('hashchange', handleUrlAnchorChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlAnchorChange);
    };
  }, []);

  return (
    <ul className="nav">
      <li>
        <a href="#experiences" 
        className={activeSection === 'experiences' ? 'active' : ''}
        onClick={(e) => handleLinkClick(e, 'experiences')}>
          Expériences
        </a>
      </li>
      <li>
        <a href="#skills" 
        className={activeSection === 'skills' ? 'active' : ''}
        onClick={(e) => handleLinkClick(e, 'skills')}>
          Compétences
        </a>
      </li>
      <li>
        <a href="#educations" 
        className={activeSection === 'educations' ? 'active' : ''}
        onClick={(e) => handleLinkClick(e, 'educations')}>
          Diplômes
        </a>
      </li>
      <li>
        <a href="#interests" 
        className={activeSection === 'interests' ? 'active' : ''}
        onClick={(e) => handleLinkClick(e, 'interests')}>
          Centres d'intérêt
        </a>
      </li>
    </ul>
  );
};

export default Nav;
