import React, { useEffect, useState } from 'react';
import './assets/scss/index.scss';

import Block from './components/block/block';
import Loader from './components/loader/loader';

function App() {

  const [haveLoader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    // }, 100)
    }, 7500)
  }, [])

  return (
    <div className="app">
      {haveLoader &&
        <Loader />
      }
      <div className='column-1'>
        <div className='flex-basis-1'>
          <Block grid="small-height" content="intro"/>
          <Block grid="small-height" content="player"/>
        </div>
        <Block grid="big-height" content="animation" id="animation"/>
      </div>
        <Block grid="flex-basis-2 full-height" content="main"/>
    </div>
  );
}

export default App;
 