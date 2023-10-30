import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Title from '../title/title';
import Timeline from '../../containers/timeline';

/**
 * Primary UI component for user interaction
 */
const Education = ({...props }) => {

  const TitleSpecs = [
    'Diplômes',
    'et certifications'
  ];

  return (
    <section id="educations">
      <Title specs={TitleSpecs}/>
      <Timeline content='educations'/>
    </section>
  );
};

Education.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Education.defaultProps = {
//   backgroundColor: null,

// };

export default Education;
