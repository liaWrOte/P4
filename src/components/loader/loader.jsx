import React from 'react';
import './index.scss';

const Loader = () => {
  return (
    <div id="spinner">

        <div id="loader">
        
            <div id="loading">
                <div className="circle" id="first"></div>
                <div className="circle"  id="second"></div>
                <div className="circle"  id="third"></div>
            </div>
            
            <div>
                <h1>CHARGEMENT</h1>
            </div>
        
        </div>
    </div>
  );
};

export default Loader;
