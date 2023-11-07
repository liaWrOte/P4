import React from 'react';
import './index.scss';

const Title = ({...props }) => {
    return (
    <div className="title">
      <h2>
        <p className="big-title">{props.specs[0]}</p>
        <p  className="small-title">{props.specs[1]}</p>
     </h2>
    </div>
  );
};

export default Title;
