import React from 'react';

import Title from '../title/title';
import List from '../../containers/list';


const Interests = () => {

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

export default Interests;
