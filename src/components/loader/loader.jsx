import React, { useState, useEffect } from 'react';
import './index.scss';

const Loader = () => {

  const [haveLoadingText, setLoadingText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingText(false);
    }, 7000)
  }, [])

  return (
    <div id="spinner">
        <div id="loader">
            <div id="loading">
                <div className="circle" id="first"></div>
                <div className="circle"  id="second"></div>
                <div className="circle"  id="third"></div>
            </div>
            {haveLoadingText && 
              <span>CHARGEMENT</span>
            }
        </div>
    </div>
  );
};

export default Loader;
