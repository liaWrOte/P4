import React from 'react';

import Title from '../title/title';
import Timeline from '../../containers/timeline';

const Education = () => {

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

export default Education;
