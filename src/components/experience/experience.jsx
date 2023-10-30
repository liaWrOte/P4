import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Title from '../title/title';
import Timeline from '../../containers/timeline';

/**
 * Primary UI component for user interaction
 */
const Experience = ({...props }) => {

  const TitleSpecs = [
    'Expériences',
    'professionnelles'
  ];

  return (
    <section id='experiences'>
      <Title specs={TitleSpecs}/>
      <Timeline content='experiences'/>
    </section>
  );
};

Experience.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Experience.defaultProps = {
//   backgroundColor: null,

// };

export default Experience;
