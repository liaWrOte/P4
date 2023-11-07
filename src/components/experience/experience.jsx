import React from 'react';

import Title from '../title/title';
import Timeline from '../../containers/timeline';

const Experience = () => {

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

export default Experience;
