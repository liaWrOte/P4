import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Title from '../title/title';
import List from '../../containers/list';

/**
 * Primary UI component for user interaction
 */
const Skills = ({...props }) => {

  const TitleSpecs = [
    'Compétences',
    'techniques et personelles'
  ];

  return (
    <section id="skills">
      <Title specs={TitleSpecs}/>
      <List content='skills'/>
    </section>
  );
};

Skills.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Skills.defaultProps = {
//   backgroundColor: null,

// };

export default Skills;
