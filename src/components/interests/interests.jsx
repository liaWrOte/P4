import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Title from '../title/title';
import List from '../../containers/list';

/**
 * Primary UI component for user interaction
 */
const Interests = ({...props }) => {

  const TitleSpecs = [
    'Centres d\'intérêts',
    'et loisirs'
  ];

  return (
    <section id="interests">
      <Title specs={TitleSpecs}/>
      <List content='interests'/>
    </section>
  );
};

Interests.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

};

// Interests.defaultProps = {
//   backgroundColor: null,

// };

export default Interests;
